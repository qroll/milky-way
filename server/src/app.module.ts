import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { LikesController } from './likes/likes.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { DatabaseConfig } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DatabaseConfig,
      type: 'postgres',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../db/entity/**/*.{ts,js}'],
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, CatsController, DogsController, LikesController],
  providers: [AppService],
})
export class AppModule {}
