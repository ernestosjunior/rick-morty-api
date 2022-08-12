import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolvers } from './auth.resolvers';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma';

@Module({
  providers: [AuthResolvers, AuthService, UserService, PrismaService],
})
export class AuthModule {}
