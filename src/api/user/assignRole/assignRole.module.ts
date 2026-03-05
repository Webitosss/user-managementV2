import { Module } from '@nestjs/common';
import { AssignRoleController } from './assignRole.controller';
import { AssignRoleProvider } from '.';
import { UserModule } from '../../../core/entities/user/user.module';
import { RoleModule } from '../../../core/entities/role/role.module';
import { GuardsModule } from 'src/api/auth/guards/guards.module';

@Module({
  imports: [UserModule, RoleModule, GuardsModule],
  controllers: [AssignRoleController],
  providers: [AssignRoleProvider],
  exports: [AssignRoleProvider],
})
export class AssignRoleModule {}
