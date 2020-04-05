import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';

interface User {
  id: number;
  username: string;
  isDeleted: boolean;
}

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(username);

    if (user) {
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        return null;
      }

      const { password: hashedPassword, ...userInfo } = user;
      return userInfo;
    }
    return null;
  }

  async createUser(username: string, password: string): Promise<User> {
    const hash = bcrypt.hash(password, 10);
    const user = await this.usersService.create(username, hash);

    const { password: hashedPassword, ...userInfo } = user;
    return userInfo;
  }
}
