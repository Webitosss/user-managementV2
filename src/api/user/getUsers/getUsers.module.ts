import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { GetUsersController } from './getUsers.controller';
import { GetUsersProvider } from '.';

@Module({
  imports: [UserModule],
  controllers: [GetUsersController],
  providers: [
    GetUsersProvider,
  ],
  exports: [
    GetUsersProvider,
  ],
})
export class GetUsersModule {}
 