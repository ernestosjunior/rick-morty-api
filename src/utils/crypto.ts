import { hashSync, compareSync } from 'bcryptjs';

export const encryptPassword = (password: string): string => {
  return hashSync(password, 10);
};

export const decryptPassword = (password: string, hash: string): boolean => {
  return compareSync(password, hash);
};
