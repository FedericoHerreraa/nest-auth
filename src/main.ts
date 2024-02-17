import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ 
    origin: ['https://nestauth-phi.vercel.app', 'http://localhost:5173'],
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type'],
    exposedHeaders: 'Authorization',
    methods: ['POST','GET', 'PUT', 'DELETE']
  })
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
