import { UserTable } from 'src/database/models/user-model';

export interface Database {
  user: UserTable;
}
