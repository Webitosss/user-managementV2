import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { UpdateUserFullController } from './updateUserFull.controller';
import { UpdateUserFullProvider } from '.';

@Module({
  imports: [UserModule],
  controllers: [UpdateUserFullController],
  providers: [UpdateUserFullProvider],
  exports: [UpdateUserFullProvider],
})
export class UpdateUserFullModule {}
