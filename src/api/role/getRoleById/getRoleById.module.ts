import { Module } from '@nestjs/common';
import { RoleModule } from 'src/core/entities/role/role.module';
import { GetRoleByIdProvider } from '.';
import { GetRoleByIdController } from './getRoleById.controller';

@Module({
  imports: [RoleModule],
  controllers: [GetRoleByIdController],
  providers: [GetRoleByIdProvider],
  exports: [GetRoleByIdProvider],
})
export class GetRoleByIdModule {}
