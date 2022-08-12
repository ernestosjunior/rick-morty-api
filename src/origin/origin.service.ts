import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Origin } from '@prisma/client';
import { NewOrigin } from 'src/graphql';

@Injectable()
export class OriginService {
  constructor(private prisma: PrismaService) {}

  async origin(id: string): Promise<Origin | null> {
    return this.prisma.origin.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async origins(): Promise<Origin[]> {
    return this.prisma.origin.findMany({});
  }

  async originByName(name: string): Promise<Origin | null> {
    return this.prisma.origin.findUnique({
      where: {
        name,
      },
    });
  }

  async createorigin(input: NewOrigin): Promise<Origin> {
    return this.prisma.origin.create({
      data: input,
    });
  }
}
