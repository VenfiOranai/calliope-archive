import { UserTable } from 'src/database/repos/user-repo';
import { BookTable } from 'src/database/repos/book-repo';
import { UserBookTable } from 'src/database/repos/user-book-repo';

export interface Database {
  user: UserTable;
  book: BookTable;
  userBook: UserBookTable;
}

export enum TableNames {
  user = 'user',
  book = 'book',
  userBook = 'userBook',
}
