import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { repos } from 'src/database/repos/repos';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Factory');

  logger.debug('Initializing...');
  const app = await NestFactory.create(AppModule);

  logger.debug('Enabling cors');
  app.enableCors();

  logger.debug('Instantiating tables');
  await Promise.all(Object.values(repos).map(async (repo) => await repo.bootstrap(logger)));

  logger.debug('Listening on port 3000');
  await app.listen(3000);
}
bootstrap();
