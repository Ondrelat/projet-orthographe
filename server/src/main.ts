import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const PORT = process.env.PORT || 3000; // Utilisation du port par défaut 3000 si PORT n'est pas défini
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS
  await app.listen(PORT);
}
bootstrap();
