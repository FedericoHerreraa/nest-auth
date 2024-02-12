import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ 
    origin: 'https://nestauth-phi.vercel.app',
    credentials: true,
    allowedHeaders: 'Authorization',
    exposedHeaders: 'Authorization',
  })
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
