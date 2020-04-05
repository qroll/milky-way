import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { User } from '../../db/entity/User';

@Injectable()
export class UsersService {
  constructor(private connection: Connection) {
    this.connection = connection;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.connection.manager.findOne(User, { username });
  }

  async create(username: string, password: string) {
    return this.connection.manager.create(User, { username, password });
  }
}
