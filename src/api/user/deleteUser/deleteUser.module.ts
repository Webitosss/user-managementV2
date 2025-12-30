import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { DeleteUserController } from './deleteUser.controller';
import { DeleteUserProvider } from '.';

@Module({
  imports: [UserModule],
  controllers: [DeleteUserController],
  providers: [
    DeleteUserProvider,
  ],
  exports: [
    DeleteUserProvider,
  ],
})
export class DeleteUserModule {}
 