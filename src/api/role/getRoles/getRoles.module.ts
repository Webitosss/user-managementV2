import { Module } from '@nestjs/common';
import { RoleModule } from 'src/core/entities/role/role.module';
import { GetRolesProvider } from '.';
import { GetRolesController } from './getRoles.controller';
import { GuardsModule } from 'src/api/auth/guards/guards.module';

@Module({
  imports: [RoleModule, GuardsModule],
  controllers: [GetRolesController],
  providers: [GetRolesProvider],
  exports: [GetRolesProvider],
})
export class GetRolesModule {}
