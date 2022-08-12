import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/graphql';

@ObjectType()
export class AuthType {
  @Field(() => User)
  user: User;

  token: string;
}
