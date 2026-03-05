import { Body, Controller, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateServiceUserProvider } from './createUser.provider';
import { CreateUserDto } from './dtos/createUser.dto';
import { Roles } from 'src/api/auth/guards/verify-roles-guard/roles.decorator';
import { TokenAuthGuard } from 'src/api/auth/guards/token-auth-validation/token-auth.guard';
import { VerifyRolesGuard } from 'src/api/auth/guards/verify-roles-guard/verify-roles.guard';
import { JwtInfoInterceptor } from 'src/api/auth/guards/token-auth-validation/interceptor/jwt-info.interceptor';

@Controller('users')
@UseInterceptors(JwtInfoInterceptor)
export class CreateUserController {
  constructor(private readonly createUserService: CreateServiceUserProvider) {}

  @Post()
  @Roles('ADMIN')
  @UseGuards(TokenAuthGuard, VerifyRolesGuard)
  create(@Body() dto: CreateUserDto) {
    return this.createUserService.execute(dto);
  }
}
