import { JournalistsService } from '@application/journalists/services/journalists.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly journalistsService: JournalistsService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<any> {
    const user = await this.validateUser(email, password);
    const payload = { id: user.id, email: user.email };
    const access_token = await this.jwtService.signAsync(payload);

    return { payload, access_token };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.journalistsService.findOne(email);
    const comparePasswords = await bcrypt.compare(password, user.password);

    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    if (!comparePasswords) {
      throw new UnauthorizedException('Invalid password.');
    }

    return user;
  }
}
