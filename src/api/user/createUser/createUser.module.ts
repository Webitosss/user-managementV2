import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { CreateUserController } from './createUser.controller';
import { CreateUserProvider } from '.';

@Module({
  imports: [UserModule],
  controllers: [CreateUserController],
  providers: [CreateUserProvider],
  exports: [CreateUserProvider],
})
export class CreateUserModule {}
