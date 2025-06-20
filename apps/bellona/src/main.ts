import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { repos } from 'src/database/repos/repos';
import { Logger, VersioningType } from '@nestjs/common';
import { ErrorInterceptor } from 'src/controllers/utils/error.interceptor';

async function bootstrap() {
  const logger = new Logger('Factory');

  logger.debug('Initializing...');
  const app = await NestFactory.create(AppModule);

  logger.debug('Enabling URI Versioning');
  app.enableVersioning({ type: VersioningType.URI });

  logger.debug('Enabling cors');
  app.enableCors();

  logger.debug('Wrap errors');
  app.useGlobalInterceptors(new ErrorInterceptor());

  logger.debug('Instantiating tables');
  await Promise.all(Object.values(repos).map(async (repo) => await repo.bootstrap(logger)));

  logger.debug('Listening on port 3000');
  await app.listen(3000);
}
bootstrap();
