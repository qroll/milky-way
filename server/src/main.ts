require('dotenv').config();

import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as helmet from 'helmet';

import { AppModule } from './app.module';
import { AnyExceptionFilter } from './any-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AnyExceptionFilter(httpAdapter));
  app.use(helmet());
  app.enableCors({
    methods: ['GET', 'PUT', 'POST'],
    origin: process.env.CORS_OPTIONS_ORIGIN,
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
