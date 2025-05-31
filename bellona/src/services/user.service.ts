import { Injectable } from '@nestjs/common';
import { repos } from 'src/database/repos/repos';
import { AlreadyExistsError } from 'src/errors/validation-errors';

@Injectable()
export class UserService {
  public async createUser(username: string): Promise<number> {
    if (await repos.user.doesUserExist(username)) {
      throw new AlreadyExistsError('User already exists!', { username });
    }

    return (await repos.user.create({ username })).id;
  }
}
