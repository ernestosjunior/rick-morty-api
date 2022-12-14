import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/graphql';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.API_KEY,
    });
  }

  async validate(payload: { sub: User['id']; name: string }) {
    const user = this.userService.user(payload.sub);

    if (!user) {
      throw new UnauthorizedException('Unauthorized');
    }

    return user;
  }
}
