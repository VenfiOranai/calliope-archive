import { UserTable } from 'src/database/repos/user-repo';

export interface Database {
  user: UserTable;
}

export enum TableNames {
  user = 'user',
}
