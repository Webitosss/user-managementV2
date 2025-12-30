import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { GetUserByIdController } from './getUserById.controller';
import { GetUserByIdProvider } from '.';

@Module({
  imports: [UserModule],
  controllers: [GetUserByIdController],
  providers: [
    GetUserByIdProvider,
  ],
  exports: [
    GetUserByIdProvider,
  ],
})
export class GetUserByIdModule {}
 