import { Module } from '@nestjs/common';
import { CharacterResolvers } from './character.resolvers';
import { CharacterService } from './character.service';
import { PrismaService } from 'src/prisma';

@Module({
  providers: [CharacterResolvers, CharacterService, PrismaService],
})
export class CharacterModule {}
