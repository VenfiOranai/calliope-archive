import { BaseRepo, BaseTable, Column } from 'src/database/repos/base-repo';
import { Insertable, Updateable } from 'kysely';
import { TableNames } from 'src/database/repos/types';
import { db } from 'src/database/database';

export interface UserTable extends BaseTable {
  username: string;
}

type NewUser = Insertable<UserTable>;
type UserUpdate = Updateable<UserTable>;

export class UserRepo extends BaseRepo<NewUser, UserUpdate> {
  protected readonly tableName: TableNames = TableNames.user;
  protected columns: Column[] = [
    {
      name: "id",
      type: "integer",
      extras: (cb) => cb.primaryKey().autoIncrement().notNull(),
    },
    { name: "username", type: "text" },
  ];

  public async doesUserExist(username: string): Promise<boolean> {
    return (await db.selectFrom(TableNames.user)
      .select('id')
      .where('username', '=', username)
      .executeTakeFirst()) !== undefined;
  }
}
