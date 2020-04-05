import { BaseService } from "./BaseService";

const baseUrl = "http://localhost:3000";

export interface Like {
  id: number;
  body: string;
}

export class LikeService extends BaseService {
  static getLikes(): Promise<Like[]> {
    return Promise.resolve([
      {
        id: 1,
        body: "the color orange"
      },
      {
        id: 2,
        body: "cats"
      }
    ]);
  }
}
