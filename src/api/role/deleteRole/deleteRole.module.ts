import { Module } from '@nestjs/common';
import { DeleteRoleController } from './deleteRole.controller';
import { DeleteRoleProvider } from '.';
import { RoleModule } from 'src/core/entities/role/role.module';
import { UserModule } from 'src/core/entities/user/user.module';
import { GuardsModule } from 'src/api/auth/guards/guards.module';

@Module({
  imports: [RoleModule, UserModule, GuardsModule],
  controllers: [DeleteRoleController],
  providers: [DeleteRoleProvider],
  exports: [DeleteRoleProvider],
})
export class DeleteRoleModule {}
