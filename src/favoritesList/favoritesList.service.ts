import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { FavoritesList } from '@prisma/client';
import { NewFavoritesList } from 'src/graphql';

@Injectable()
export class FavoritesListService {
  constructor(private prisma: PrismaService) {}

  async favoriteslist(id: string): Promise<FavoritesList[] | null> {
    return this.prisma.favoritesList.findMany({
      where: {
        userId: parseInt(id),
      },
    });
  }

  async createfavoriteslist(input: NewFavoritesList): Promise<FavoritesList> {
    const { userId, characterId } = input;

    return this.prisma.favoritesList.create({
      data: { userId, characterId },
    });
  }
}
