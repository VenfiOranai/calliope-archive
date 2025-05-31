import { BaseRepo, BaseTable, Column } from 'src/database/repos/base-repo';
import { Insertable, Updateable } from 'kysely/dist/esm';
import { TableNames } from 'src/database/repos/types';

export interface BookTable extends BaseTable {
  title: string;
  olid: string;
}

type NewBook = Insertable<BookTable>;
type BookUpdate = Updateable<BookTable>;

export class BookRepo extends BaseRepo<NewBook, BookUpdate> {
  protected readonly tableName: TableNames = TableNames.book;
  protected readonly columns: Column[] = [
    {
      name: "id",
      type: "integer",
      extras: (cb) => cb.primaryKey().autoIncrement().notNull(),
    },
    { name: "title", type: "text" },
    { name: 'olid', type: "text" },
  ];
}
