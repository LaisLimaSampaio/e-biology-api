import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  await app.listen(process.env.PORT ?? 3001);
}

const errorFunction = (error: Error) => {
  Logger.error('Error starting server', error);
  process.exit(1);
};

bootstrap().catch(errorFunction);
