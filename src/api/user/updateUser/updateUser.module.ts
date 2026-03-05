import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { UpdateUserController } from './updateUser.controller';
import { UpdateUserProvider } from '.';
import { GuardsModule } from 'src/api/auth/guards/guards.module';

@Module({
  imports: [UserModule, GuardsModule],
  controllers: [UpdateUserController],
  providers: [UpdateUserProvider],
  exports: [UpdateUserProvider],
})
export class UpdateUserModule {}
