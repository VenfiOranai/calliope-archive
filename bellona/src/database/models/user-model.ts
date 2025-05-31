import { BaseTable } from 'src/database/models/base-model';
import { Insertable, Selectable, Updateable } from 'kysely';

export interface UserTable extends BaseTable {
  username: string;
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;
