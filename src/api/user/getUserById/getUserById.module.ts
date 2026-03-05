import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { GetUserByIdController } from './getUserById.controller';
import { GetUserByIdProvider } from '.';
import { GuardsModule } from 'src/api/auth/guards/guards.module';

@Module({
  imports: [UserModule, GuardsModule],
  controllers: [GetUserByIdController],
  providers: [GetUserByIdProvider],
  exports: [GetUserByIdProvider],
})
export class GetUserByIdModule {}
