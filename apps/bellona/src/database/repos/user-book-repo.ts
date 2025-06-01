import { BaseRepo, BaseTable, Column } from 'src/database/repos/base-repo';
import { Insertable, Updateable } from 'kysely/dist/esm';
import { TableNames } from 'src/database/repos/types';

export interface UserBookTable extends BaseTable {
  userId: number;
  bookId: number;
}

type NewUserBook = Insertable<UserBookTable>;
type UserBookUpdate = Updateable<UserBookTable>;

export class UserBookRepo extends BaseRepo<NewUserBook, UserBookUpdate> {
  protected readonly tableName: TableNames = TableNames.userBook;
  protected readonly columns: Column[] = [
    {
      name: "id",
      type: "integer",
      extras: (cb) => cb.primaryKey().autoIncrement().notNull(),
    },
    {
      name: "userId",
      type: "integer",
      extras: (cb) => cb.references('user.id'),
    },
    {
      name: "bookId",
      type: "integer",
      extras: (cb) => cb.references('book.id'),
    },
  ];
}
