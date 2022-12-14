import { Module } from '@nestjs/common';
import { UserResolvers } from './user.resolvers';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma';

@Module({
  providers: [UserResolvers, UserService, PrismaService],
})
export class UserModule {}
