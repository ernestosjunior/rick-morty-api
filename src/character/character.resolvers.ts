import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CharacterService } from './character.service';
import { NewCharacter } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver('Character')
export class CharacterResolvers {
  constructor(private readonly characterService: CharacterService) {}

  @UseGuards(GqlAuthGuard)
  @Query('character')
  async character(@Args('id') args: string) {
    return this.characterService.character(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query('characteres')
  async characteres() {
    return this.characterService.characteres();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation('createCharacter')
  async create(@Args('input') args: NewCharacter) {
    return this.characterService.createcharacter(args);
  }
}
