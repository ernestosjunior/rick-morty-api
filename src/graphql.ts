/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewCharacter {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  originId?: Nullable<number>;
  locationId?: Nullable<number>;
  image: string;
  episode: string[];
  url: string;
  created: string;
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

  abstract location(): Location | Promise<Location>;

  abstract origin(): Origin | Promise<Origin>;

  abstract user(): User | Promise<User>;
}

export abstract class IMutation {
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

export class FavoritesList {
  user?: Nullable<User>;
  userId?: Nullable<number>;
  character?: Nullable<Character>;
  characterId?: Nullable<number>;
}

export class Location {
  id?: Nullable<number>;
  name?: Nullable<string>;
  url?: Nullable<string>;
  characteres?: Nullable<Nullable<Character>[]>;
}

export class Origin {
  id?: Nullable<number>;
  name?: Nullable<string>;
  url?: Nullable<string>;
  characteres?: Nullable<Nullable<Character>[]>;
}

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  characteres?: Nullable<Nullable<FavoritesList>[]>;
}

type Nullable<T> = T | null;
