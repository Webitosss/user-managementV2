import { Module } from '@nestjs/common';
import { RoleModule } from 'src/core/entities/role/role.module';
import { UpdateRoleController } from './updateRole.controller';
import { UpdateRoleProvider } from '.';
import { GuardsModule } from 'src/api/auth/guards/guards.module';

@Module({
  imports: [RoleModule, GuardsModule],
  controllers: [UpdateRoleController],
  providers: [UpdateRoleProvider],
  exports: [UpdateRoleProvider],
})
export class UpdateRoleModule {}
