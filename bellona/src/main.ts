import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { repos } from 'src/database/repos/repos';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  Object.values(repos).forEach((repo) => repo.bootstrap())

  await app.listen(3000);
}
bootstrap();
