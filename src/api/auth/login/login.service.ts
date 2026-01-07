import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserProvider } from './login.provider';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { FindUserByEmailProviderAbstract } from 'src/api/user/findUserByEmail/findUserByEmail.provider';

@Injectable()
export class LoginUserService implements LoginUserProvider {
  constructor(
    private readonly findUserByEmail: FindUserByEmailProviderAbstract,
    private readonly jwtService: JwtService,
  ) {}

  async execute(data: LoginDto) {
    const user = await this.findUserByEmail.execute(data.email);

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const payload = {
      sub: user.id,
      email: user.email,
      id: user.id,
      roles: user.roles,
    };

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '30m',
    });

    return { token };
  }
}
