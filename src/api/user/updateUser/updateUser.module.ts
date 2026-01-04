import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { UpdateUserController } from './updateUser.controller';
import { UpdateUserProvider } from '.';

@Module({
  imports: [UserModule],
  controllers: [UpdateUserController],
  providers: [UpdateUserProvider],
  exports: [UpdateUserProvider],
})
export class UpdateUserModule {}
