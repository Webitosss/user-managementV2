import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './role.entity';
import { RoleEntityProvider } from '.';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleEntity]),
  ],
  providers: [RoleEntityProvider],
  exports: [RoleEntityProvider],
})
export class RoleModule {}
