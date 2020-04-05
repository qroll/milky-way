import { BaseService } from "./BaseService";

const baseUrl = "http://localhost:3000";

interface UserInfo {
  id: number;
  username: string;
}

export class AuthService extends BaseService {
  static login(username: string, password: string) {
    const data = { username, password };
    return this.post<typeof data, UserInfo>(`${baseUrl}/auth/login`, data);
  }

  static logout() {
    return this.post(`${baseUrl}/auth/logout`);
  }

  static getSession() {
    return this.get<UserInfo>(`${baseUrl}/auth/session`);
  }
}
