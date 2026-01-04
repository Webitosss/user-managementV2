import { Module } from '@nestjs/common';
import { AssignRoleController } from './assignRole.controller';
import { AssignRoleProvider } from '.';
import { UserModule } from '../../../core/entities/user/user.module';
import { RoleModule } from '../../../core/entities/role/role.module';

@Module({
  imports: [UserModule, RoleModule],
  controllers: [AssignRoleController],
  providers: [AssignRoleProvider],
  exports: [AssignRoleProvider],
})
export class AssignRoleModule {}
