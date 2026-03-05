import { Controller, Patch, Param, Body, UseGuards, UseInterceptors } from '@nestjs/common';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UpdateServiceUserProvider } from './updateUser.provider';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('users')
@UseInterceptors(JwtInfoInterceptor)
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateServiceUserProvider) {}

  @Patch(':id')
  @Roles('ADMIN')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard)
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.updateUserService.execute(id, body);
  }
}
