import { User } from '@prisma/client';
import { sign } from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const generateToken = (user: User): string => {
  const { id, name, email } = user;
  const apiKey = process.env.API_KEY;

  return sign({ id, name, email }, apiKey);
};
