import { Body, Controller, Post, Version } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('/users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Version('1')
  @Post('/register')
  public async createUser(@Body('username') username: string): Promise<number> {
    return await this.userService.createUser(username);
  }
}
