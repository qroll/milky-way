require('dotenv').config();

import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AnyExceptionFilter } from './any-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AnyExceptionFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
