import { Module } from '@nestjs/common';
import { LocationResolvers } from './location.resolvers';
import { LocationService } from './location.service';
import { PrismaService } from 'src/prisma';

@Module({
  providers: [LocationResolvers, LocationService, PrismaService],
})
export class LocationModule {}
