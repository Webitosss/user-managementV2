import { Module } from '@nestjs/common';
import { CreateRoleModule } from './createRole/createRole.module';
import { DeleteRoleModule } from './deleteRole/deleteRole.module';
import { GetRoleByIdModule } from './getRoleById/getRoleById.module';
import { GetRolesModule } from './getRoles/getRoles.module';
import { UpdateRoleModule } from './updateRole/updateRole.module';

@Module({
  imports: [
    CreateRoleModule,
    DeleteRoleModule,
    GetRoleByIdModule,
    GetRolesModule,
    UpdateRoleModule,
  ],
  exports: [
    CreateRoleModule,
    DeleteRoleModule,
    GetRoleByIdModule,
    GetRolesModule,
    UpdateRoleModule,
  ],
})
export class RoleModule {}
