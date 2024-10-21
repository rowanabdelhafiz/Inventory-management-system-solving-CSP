import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', 
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders:['Content-Type','Authorization'],
    credentials: true,
  });
  await app.listen(5000);
}
bootstrap();

