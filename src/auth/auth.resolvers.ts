import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver('User')
export class AuthResolvers {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  async create(@Args('data') args: any): Promise<any> {
    const res = await this.authService.validateUser(args);

    return {
      user: res.user,
      token: res.token,
    };
  }
}
