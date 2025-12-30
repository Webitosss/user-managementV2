import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserProvider } from './login.provider';
import { LoginDto } from './dtos/login.dto';

@Controller('auth/login')
export class LoginController {

  constructor(
    private readonly loginService: LoginUserProvider
  ) {}

  @Post()
  login(@Body() dto: LoginDto) {
    return this.loginService.execute(dto);
  }

}
