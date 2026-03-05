import { Controller, Get, Param, ParseUUIDPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { GetByIdServiceUserProvider } from './getUserById.provider';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { RateLimitGuard } from 'src/api/auth/guards/rate-limit/rate-limit.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('users')
@UseInterceptors(JwtInfoInterceptor)
export class GetUserByIdController {
  constructor(private readonly getUserById: GetByIdServiceUserProvider) {}

  @Get(':id')
  @Roles('ADMIN', 'USER', 'IP')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard, RateLimitGuard)
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.getUserById.execute(id);
  }
}
