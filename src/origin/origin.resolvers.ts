import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OriginService } from './origin.service';
import { NewOrigin } from 'src/graphql';

@Resolver('Origin')
export class OriginResolvers {
  constructor(private readonly originService: OriginService) {}

  @Query('origin')
  async origin(@Args('id') args: string) {
    return this.originService.origin(args);
  }

  @Query('origins')
  async origins() {
    return this.originService.origins();
  }

  @Mutation('createOrigin')
  async create(@Args('input') args: NewOrigin) {
    return this.originService.createorigin(args);
  }
}
