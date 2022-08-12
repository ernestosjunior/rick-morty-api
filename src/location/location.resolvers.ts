import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { NewLocation } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver('Location')
export class LocationResolvers {
  constructor(private readonly locationService: LocationService) {}

  @UseGuards(GqlAuthGuard)
  @Query('location')
  async location(@Args('id') args: string) {
    return this.locationService.location(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query('locations')
  async locations() {
    return this.locationService.locations();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation('createLocation')
  async create(@Args('input') args: NewLocation) {
    return this.locationService.createlocation(args);
  }
}
