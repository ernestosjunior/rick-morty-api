import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/graphql';

@ObjectType()
export class AuthType {
  @Field(() => User)
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
  };

  token: string;
}
