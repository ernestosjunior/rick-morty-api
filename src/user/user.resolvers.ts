import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, NewUser } from 'src/graphql';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('user')
  async user(@Args('id') args: string) {
    return this.userService.user(args);
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser) {
    return this.userService.createuser(args);
  }
}
