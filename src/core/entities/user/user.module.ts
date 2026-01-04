import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserEntityProvider } from '.';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserEntityProvider],
  exports: [UserEntityProvider],
})
export class UserModule {}
