import { Module } from '@nestjs/common';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { CoreModule } from 'src/core/core.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoreModule, RoleModule, UserModule, AuthModule],
  exports: [RoleModule, UserModule, AuthModule],
})
export class ApiModule {}
