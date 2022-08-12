import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { NewUser } from 'src/graphql';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('user')
  async user(@Args('id') args: string) {
    return this.userService.user(args);
  }

  @Query('userByEmail')
  async userByEmail(@Args('email') args: string) {
    return this.userService.userbyemail(args);
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser) {
    return this.userService.createuser(args);
  }
}
