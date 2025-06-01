import { UserRepo } from 'src/database/repos/user-repo';
import { BookRepo } from 'src/database/repos/book-repo';
import { UserBookRepo } from 'src/database/repos/user-book-repo';

export const repos = {
  user: new UserRepo(),
  book: new BookRepo(),
  userBook: new UserBookRepo(),
}
