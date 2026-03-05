import { Controller, Put, Param, Body, UseGuards, UseInterceptors } from '@nestjs/common';
import { UpdateUserFullDto } from './dtos/updateUserFull.dto';
import { UpdateFullServiceUserProvider } from './updateUserFull.provider';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('users')
@UseInterceptors(JwtInfoInterceptor)
export class UpdateUserFullController {
  constructor(
    private readonly updateUserFullService: UpdateFullServiceUserProvider,
  ) {}

  @Put(':id')
  @Roles('ADMIN')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateUserFullDto) {
    return this.updateUserFullService.execute(id, dto);
  }
}
