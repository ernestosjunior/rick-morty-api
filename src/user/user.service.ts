import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { User } from '@prisma/client';
import { NewUser } from 'src/graphql';
import { encryptPassword } from 'src/utils/crypto';

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

  async userbyemail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createuser(input: NewUser): Promise<User> {
    const { name, email, password } = input;

    return this.prisma.user.create({
      data: { name, email, password: encryptPassword(password) },
    });
  }
}
