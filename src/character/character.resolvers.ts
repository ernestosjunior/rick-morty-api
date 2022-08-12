import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CharacterService } from './character.service';
import { NewCharacter } from 'src/graphql';

@Resolver('Character')
export class CharacterResolvers {
  constructor(private readonly characterService: CharacterService) {}

  @Query('character')
  async character(@Args('id') args: string) {
    return this.characterService.character(args);
  }

  @Query('characteres')
  async characteres() {
    return this.characterService.characteres();
  }

  @Mutation('createCharacter')
  async create(@Args('input') args: NewCharacter) {
    return this.characterService.createcharacter(args);
  }
}
