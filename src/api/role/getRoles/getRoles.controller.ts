import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { GetRolesServiceRoleProvider } from './getRoles.provider';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { RateLimitGuard } from 'src/api/auth/guards/rate-limit/rate-limit.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('roles')
@UseInterceptors(JwtInfoInterceptor)
export class GetRolesController {
  constructor(private readonly getRoles: GetRolesServiceRoleProvider) {}

  @Get()
  @Roles('ADMIN', 'USER', 'IP')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard, RateLimitGuard)
  async findAll() {
    return this.getRoles.execute();
  }
}
