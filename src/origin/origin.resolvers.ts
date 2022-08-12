import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OriginService } from './origin.service';
import { NewOrigin } from 'src/graphql';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver('Origin')
export class OriginResolvers {
  constructor(private readonly originService: OriginService) {}

  @UseGuards(GqlAuthGuard)
  @Query('origin')
  async originByName(@Args('name') args: string) {
    return this.originService.originbyname(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query('originByName')
  async origin(@Args('id') args: string) {
    return this.originService.origin(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query('origins')
  async origins() {
    return this.originService.origins();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation('createOrigin')
  async create(@Args('input') args: NewOrigin) {
    return this.originService.createorigin(args);
  }
}
