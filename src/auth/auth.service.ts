import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthInput } from './dto/auth.input';
import { User as UserInt } from '@prisma/client';
import { decryptPassword } from 'src/utils/crypto';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.userService.userbyemail(data.email);
    const isValidPassword = decryptPassword(data.password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid credentials.');
    }

    const token = await this.jwtToken(user);

    return { user, token };
  }

  private async jwtToken(user: UserInt): Promise<string> {
    const payload = { username: user.name, sub: user.id };
    return this.jwtService.signAsync(payload);
  }
}
