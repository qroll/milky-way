import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '../entity/User';

export class UserSeed implements MigrationInterface {
  name = 'UserSeed1584949356000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = await bcrypt.hash('password', 10);
    await queryRunner.manager.insert(User, {
      id: 1,
      username: 'roll',
      password: password,
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(User, { id: 1 });
  }
}
