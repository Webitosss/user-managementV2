import { Controller, Patch, Param, Body, UseGuards, UseInterceptors } from '@nestjs/common';
import { UpdateServiceRoleProvider } from './updateRole.provider';
import { UpdateRoleDto } from './dtos/updateRole.Dto';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('roles')
@UseInterceptors(JwtInfoInterceptor)
export class UpdateRoleController {
  constructor(private readonly updateRoleService: UpdateServiceRoleProvider) {}

  @Patch(':id')
  @Roles('ADMIN')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard)
  async updateRole(@Param('id') id: string, @Body() body: UpdateRoleDto) {
    return this.updateRoleService.execute(id, body);
  }
}
