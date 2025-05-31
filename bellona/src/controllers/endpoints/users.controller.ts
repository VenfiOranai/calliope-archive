import { Body, Controller } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { Post } from 'src/controllers/utils/route-decorators';

@Controller('/users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post({ version: 1, path: '/register' })
  public async createUser(@Body('username') username: string): Promise<number> {
    return await this.userService.createUser(username);
  }
}
