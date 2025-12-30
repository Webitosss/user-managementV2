import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserEntityProvider } from '.';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [
    UserEntityProvider,
    UserService,
  ],
  exports: [
    UserEntityProvider,
    UserService,
  ],
})
export class UserModule {}
