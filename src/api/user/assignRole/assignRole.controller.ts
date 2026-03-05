import { Controller, Post, Param, ParseUUIDPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { AssignRoleServiceUserProvider } from './assignRole.provider';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('users')
@UseInterceptors(JwtInfoInterceptor)
export class AssignRoleController {
  constructor(
    private readonly assignRoleService: AssignRoleServiceUserProvider,
  ) {}

  @Post(':id/roles/:roleId')
  @Roles('ADMIN')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard)
  async assignRole(
    @Param('id', ParseUUIDPipe) userId: string,
    @Param('roleId', ParseUUIDPipe) roleId: string,
  ) {
    await this.assignRoleService.execute(userId, roleId);
    return { message: 'Role assigned successfully' };
  }
}
