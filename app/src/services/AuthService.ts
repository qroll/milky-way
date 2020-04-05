import { BaseService } from "./BaseService";

const baseUrl = "http://localhost:3000";

export class AuthService extends BaseService {
  static login(username: string, password: string) {
    const data = { username, password };
    return this.post(`${baseUrl}/auth/login`, data);
  }

  static logout() {
    return this.post(`${baseUrl}/auth/logout`);
  }
}
