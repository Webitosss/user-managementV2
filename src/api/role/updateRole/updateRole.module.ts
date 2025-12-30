import { Module } from '@nestjs/common';
import { RoleModule } from 'src/core/entities/role/role.module';
import { UpdateRoleController } from './updateRole.controller';
import { UpdateRoleProvider } from '.';

@Module({
  imports: [RoleModule],
  controllers: [UpdateRoleController],
  providers: [UpdateRoleProvider],
  exports: [UpdateRoleProvider],
})
export class UpdateRoleModule {}
