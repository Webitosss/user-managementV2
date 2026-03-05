import { Controller, Delete, Param, ParseUUIDPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { DeleteServiceUserProvider } from './deleteUser.provider';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('users')
@UseInterceptors(JwtInfoInterceptor)
export class DeleteUserController {
  constructor(private readonly deleteUser: DeleteServiceUserProvider) {}

  @Delete(':id')
  @Roles('ADMIN')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard)
  async deleteUserById(@Param('id', ParseUUIDPipe) id: string) {
    return this.deleteUser.execute(id);
  }
}
