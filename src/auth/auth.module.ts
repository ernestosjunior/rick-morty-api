import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolvers } from './auth.resolvers';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.API_KEY,
        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
  ],
  providers: [
    AuthResolvers,
    AuthService,
    UserService,
    PrismaService,
    JwtStrategy,
  ],
})
export class AuthModule {}
