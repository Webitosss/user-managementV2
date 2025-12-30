import { Module } from '@nestjs/common';
import { CreateRoleController } from './createRole.controller';
import { RoleModule } from '../../../core/entities/role/role.module';
import { CreateRoleProvider } from '.';

@Module({
  imports: [RoleModule],
  controllers: [CreateRoleController],
  providers: [CreateRoleProvider],
  exports: [CreateRoleProvider],
})
export class CreateRoleModule {}
