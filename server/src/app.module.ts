import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CookieSessionModule } from 'nestjs-cookie-session';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { LikesController } from './likes/likes.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { DatabaseConfig, CookieConfig } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DatabaseConfig,
      type: 'postgres',
      synchronize: true,
      logging: false,
      entities: [path.resolve(__dirname, '../db/entity/**/*.{ts,js}')],
    }),
    AuthModule,
    UsersModule,
    CookieSessionModule.forRoot({
      session: {
        secret: CookieConfig.secret,
        domain: CookieConfig.url,
        name: CookieConfig.name,
      },
    }),
  ],
  controllers: [AppController, CatsController, DogsController, LikesController],
  providers: [AppService],
})
export class AppModule {}
