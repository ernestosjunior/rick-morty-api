import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { NewLocation } from 'src/graphql';

@Resolver('Location')
export class LocationResolvers {
  constructor(private readonly locationService: LocationService) {}

  @Query('location')
  async location(@Args('id') args: string) {
    return this.locationService.location(args);
  }

  @Query('locations')
  async locations() {
    return this.locationService.locations();
  }

  @Mutation('createLocation')
  async create(@Args('input') args: NewLocation) {
    return this.locationService.createlocation(args);
  }
}
