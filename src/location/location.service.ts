import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Location } from '@prisma/client';
import { NewLocation } from 'src/graphql';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async location(id: string): Promise<Location | null> {
    return this.prisma.location.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async locations(): Promise<Location[]> {
    return this.prisma.location.findMany({});
  }

  async createlocation(input: NewLocation): Promise<Location> {
    return this.prisma.location.create({
      data: input,
    });
  }
}
