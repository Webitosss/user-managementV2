import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { FindUserByEmailProvider } from '.';

@Module({
  imports: [UserModule],
  providers: [FindUserByEmailProvider],
  exports: [FindUserByEmailProvider],
})
export class FindUserByEmailModule {}
