import { Body, Controller, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateRoleDto } from './dtos/createRole.dto';
import { CreateServiceRoleProvider } from './createRole.provider';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('roles')
@UseInterceptors(JwtInfoInterceptor)
export class CreateRoleController {
  constructor(private readonly createRoleService: CreateServiceRoleProvider) {}

  @Post()
  @Roles('ADMIN')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard)
  create(@Body() dto: CreateRoleDto) {
    return this.createRoleService.execute(dto);
  }
}
