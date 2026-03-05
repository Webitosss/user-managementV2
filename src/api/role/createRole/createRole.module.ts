import { Module } from '@nestjs/common';
import { CreateRoleController } from './createRole.controller';
import { RoleModule } from '../../../core/entities/role/role.module';
import { CreateRoleProvider } from '.';
import { GuardsModule } from 'src/api/auth/guards/guards.module';

@Module({
  imports: [RoleModule, GuardsModule],
  controllers: [CreateRoleController],
  providers: [CreateRoleProvider],
  exports: [CreateRoleProvider],
})
export class CreateRoleModule {}
