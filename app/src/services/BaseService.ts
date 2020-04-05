import { ErrorFactory } from "./HttpError";

export class BaseService {
  static get(url: string) {
    return this.wrapper(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  static post<T, R>(url: string, data?: T) {
    return this.wrapper<R>(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  static async wrapper<T>(url: string, init: RequestInit): Promise<T> {
    const response = await fetch(url, init);
    const contentType = response.headers.get("Content-Type");

    let returnValue;

    if (contentType === "application/json") {
      returnValue = await response.json();
    } else if (contentType && contentType.startsWith("text/")) {
      returnValue = await response.text();
    }

    if (!response.ok) {
      throw ErrorFactory<T>(response.status, response.statusText, returnValue);
    }

    return returnValue;
  }
}
