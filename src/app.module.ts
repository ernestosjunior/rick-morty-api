import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { OriginModule } from './origin/origin.module';
import { LocationModule } from './location/location.module';
import { AuthModule } from './auth/auth.module';
import { CharacterModule } from 'src/character/character.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    UserModule,
    OriginModule,
    LocationModule,
    AuthModule,
    CharacterModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
