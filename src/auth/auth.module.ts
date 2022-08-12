import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolvers } from './auth.resolvers';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [AuthResolvers, AuthService, UserService],
})
export class AuthModule {}
