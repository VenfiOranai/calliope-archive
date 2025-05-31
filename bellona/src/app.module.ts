import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndexController } from 'src/controllers/index.controller';
import { UserController } from 'src/controllers/user.controller';
import { BookController } from 'src/controllers/book.controller';

@Module({
  imports: [],
  controllers: [AppController, IndexController, UserController, BookController],
  providers: [AppService],
})
export class AppModule {}
