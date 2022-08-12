/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewLogin {
  email?: Nullable<string>;
  password?: Nullable<string>;
}

export class NewCharacter {
  name?: Nullable<string>;
  status?: Nullable<string>;
  species?: Nullable<string>;
  type?: Nullable<string>;
  gender?: Nullable<string>;
  originId?: Nullable<number>;
  locationId?: Nullable<number>;
  image?: Nullable<string>;
  episode?: Nullable<Nullable<string>[]>;
  url?: Nullable<string>;
  created?: Nullable<string>;
}

export class NewFavoritesList {
  userId: number;
  characterId: number;
}

export class NewLocation {
  name: string;
  url: string;
}

export class NewOrigin {
  name: string;
  url: string;
}

export class NewUser {
  name: string;
  email: string;
  password: string;
}

export class AuthType {
  user?: Nullable<User>;
  token?: Nullable<string>;
}

export abstract class IMutation {
  abstract login(data?: Nullable<NewLogin>): AuthType | Promise<AuthType>;

  abstract createCharacter(
    input?: Nullable<NewCharacter>,
  ): Character | Promise<Character>;

  abstract createFavorites(
    input?: Nullable<NewFavoritesList>,
  ): FavoritesList | Promise<FavoritesList>;

  abstract createLocation(
    input?: Nullable<NewLocation>,
  ): Location | Promise<Location>;

  abstract createOrigin(input?: Nullable<NewOrigin>): Origin | Promise<Origin>;

  abstract createUser(input?: Nullable<NewUser>): User | Promise<User>;
}

export class Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  originId?: Nullable<number>;
  origin?: Nullable<Origin>;
  locationId?: Nullable<number>;
  location?: Nullable<Location>;
  image: string;
  episode: string[];
  url: string;
  created: string;
  users?: Nullable<Nullable<FavoritesList>[]>;
}

export abstract class IQuery {
  abstract character(): Character | Promise<Character>;

  abstract favoritesList(): FavoritesList | Promise<FavoritesList>;

  abstract location(id: string): Location | Promise<Location>;

  abstract locations(): Location[] | Promise<Location[]>;

  abstract origin(id: string): Origin | Promise<Origin>;

  abstract origins(): Origin[] | Promise<Origin[]>;

  abstract user(id: string): User | Promise<User>;

  abstract userByEmail(email: string): User | Promise<User>;
}

export class FavoritesList {
  user?: Nullable<User>;
  userId?: Nullable<number>;
  character?: Nullable<Character>;
  characterId?: Nullable<number>;
}

export class Location {
  id: string;
  name?: Nullable<string>;
  url?: Nullable<string>;
  characteres?: Nullable<Nullable<Character>[]>;
}

export class Origin {
  id: string;
  name?: Nullable<string>;
  url?: Nullable<string>;
  characteres?: Nullable<Nullable<Character>[]>;
}

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  characteres?: Nullable<Nullable<FavoritesList>[]>;
}

type Nullable<T> = T | null;
