import { Module } from '@nestjs/common';
import { IndexController } from 'src/controllers/endpoints/index.controller';
import { UsersController } from 'src/controllers/endpoints/users.controller';
import { BooksController } from 'src/controllers/endpoints/books.controller';
import { UserService } from 'src/services/user.service';
import { BookService } from 'src/services/book.service';

@Module({
  imports: [],
  controllers: [IndexController, UsersController, BooksController],
  providers: [UserService, BookService],
})
export class AppModule {}
