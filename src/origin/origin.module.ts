import { Module } from '@nestjs/common';
import { OriginResolvers } from './origin.resolvers';
import { OriginService } from './origin.service';
import { PrismaService } from 'src/prisma';

@Module({
  providers: [OriginResolvers, OriginService, PrismaService],
})
export class OriginModule {}
