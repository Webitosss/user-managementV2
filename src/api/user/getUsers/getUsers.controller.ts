import { Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { GetUsersServiceUserProvider } from './getUsers.provider';
import { GetUsersQueryDto } from './dtos/getUsers.dto';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { RateLimitGuard } from 'src/api/auth/guards/rate-limit/rate-limit.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('users')
@UseInterceptors(JwtInfoInterceptor)
export class GetUsersController {
  constructor(private readonly getUsers: GetUsersServiceUserProvider) {}

  @Get()
  @Roles('ADMIN', 'USER', 'IP')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard, RateLimitGuard)
  async execute(@Query() query: GetUsersQueryDto) {
    return this.getUsers.execute({
      status: query.status,
      role: query.role,
    });
  }
}
