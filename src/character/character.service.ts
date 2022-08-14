import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { Character } from '@prisma/client';
import { NewCharacter } from 'src/graphql';

@Injectable()
export class CharacterService {
  constructor(private prisma: PrismaService) {}

  async character(id: string): Promise<Character | null> {
    return this.prisma.character.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async characteres(): Promise<Character[]> {
    return this.prisma.character.findMany({});
  }

  async createcharacter(input: NewCharacter): Promise<Character> {
    const {
      apiId,
      name,
      status,
      species,
      type,
      gender,
      originId,
      locationId,
      image,
      episode,
      url,
      created,
    } = input;

    return this.prisma.character.create({
      data: {
        apiId,
        name,
        status,
        species,
        type,
        gender,
        originId,
        locationId,
        image,
        episode,
        url,
        created,
      },
    });
  }
}
