import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndexController } from 'src/controllers/index.controller';

@Module({
  imports: [],
  controllers: [AppController, IndexController],
  providers: [AppService],
})
export class AppModule {}
