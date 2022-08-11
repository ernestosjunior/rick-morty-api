import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { User } from '@prisma/client';
import { NewUser } from 'src/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async createuser(input: NewUser): Promise<User> {
    return this.prisma.user.create({
      data: input,
    });
  }
}
