import { Module } from '@nestjs/common';
import { FavoritesListResolvers } from './favoritesList.resolvers';
import { FavoritesListService } from './favoritesList.service';
import { PrismaService } from 'src/prisma';

@Module({
  providers: [FavoritesListResolvers, FavoritesListService, PrismaService],
})
export class FavoritesListModule {}
