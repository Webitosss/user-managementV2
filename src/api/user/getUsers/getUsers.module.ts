import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { GetUsersController } from './getUsers.controller';
import { GetUsersProvider } from '.';
import { GuardsModule } from 'src/api/auth/guards/guards.module';
import { AppJwtModule } from 'src/api/auth/jwt/jwt.module';

@Module({
  imports: [UserModule, GuardsModule, AppJwtModule],
  controllers: [GetUsersController],
  providers: [GetUsersProvider],
  exports: [GetUsersProvider],
})
export class GetUsersModule {}
