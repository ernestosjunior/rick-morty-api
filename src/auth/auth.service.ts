import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthInput } from './auth.input';
import { generateToken } from 'src/utils/token';
import { decryptPassword } from 'src/utils/crypto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(data: AuthInput): Promise<any> {
    const user = await this.userService.userbyemail(data.email);
    const isValidPassword = decryptPassword(data.password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid credentials.');
    }

    return { user, token: generateToken(user) };
  }
}
