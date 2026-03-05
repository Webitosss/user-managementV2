import {
  Controller,
  Delete,
  Param,
  ParseBoolPipe,
  ParseUUIDPipe,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { DeleteServiceRoleProvider } from './deleteRole.provider';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('roles')
@UseInterceptors(JwtInfoInterceptor)
export class DeleteRoleController {
  constructor(private readonly deleteRole: DeleteServiceRoleProvider) {}

  @Delete(':id')
  @Roles('ADMIN')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard)
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('force', ParseBoolPipe) force: boolean,
  ) {
    return this.deleteRole.execute(id, force);
  }
}
