import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FavoritesListService } from './favoritesList.service';
import { NewFavoritesList } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver('FavoritesList')
export class FavoritesListResolvers {
  constructor(private readonly favoritesListService: FavoritesListService) {}

  @UseGuards(GqlAuthGuard)
  @Query('favoritesList')
  async user(@Args('id') args: string) {
    return this.favoritesListService.favoriteslist(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation('createFavorites')
  async create(@Args('input') args: NewFavoritesList) {
    return this.favoritesListService.createfavoriteslist(args);
  }
}
