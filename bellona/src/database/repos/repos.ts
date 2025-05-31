import { BaseRepo } from 'src/database/repos/base-repo';
import { UserRepo } from 'src/database/repos/user-repo';

export const repos: { [key: string]: BaseRepo<any, any> } = {
  user: new UserRepo(),
}