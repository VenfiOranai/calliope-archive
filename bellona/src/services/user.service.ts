import { Injectable } from '@nestjs/common';
import { repos } from 'src/database/repos/repos';

@Injectable()
export class UserService {
  public async createUser(username: string): Promise<number> {
    if (await repos.user.doesUserExist(username)) {
      throw new Error('User already exists!');
    }

    return (await repos.user.create({ username })).id;
  }
}
