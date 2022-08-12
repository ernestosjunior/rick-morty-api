import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { NewUser } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query('user')
  async user(@Args('id') args: string) {
    return this.userService.user(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query('userByEmail')
  async userByEmail(@Args('email') args: string) {
    return this.userService.userbyemail(args);
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser) {
    return this.userService.createuser(args);
  }
}
