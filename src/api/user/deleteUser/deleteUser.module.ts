import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { DeleteUserController } from './deleteUser.controller';
import { DeleteUserProvider } from '.';
import { GuardsModule } from 'src/api/auth/guards/guards.module';

@Module({
  imports: [UserModule, GuardsModule],
  controllers: [DeleteUserController],
  providers: [DeleteUserProvider],
  exports: [DeleteUserProvider],
})
export class DeleteUserModule {}
