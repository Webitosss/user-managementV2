import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { RefreshTokenProvider } from './refresh-token.provider';
import { TokenAuthGuard } from '../guards/token-auth-validation/token-auth.guard';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

@Controller('auth/refresh-token')
export class RefreshTokenController {
  constructor(
    private readonly refreshTokenService: RefreshTokenProvider,
  ) {}

  @Post()
  @UseGuards(TokenAuthGuard)
  refresh(@Req() request: RefreshTokenDto) {
    return this.refreshTokenService.execute({
      user: request.user,
    });
  }
}
