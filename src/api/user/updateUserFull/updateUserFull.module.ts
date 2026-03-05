import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { UpdateUserFullController } from './updateUserFull.controller';
import { UpdateUserFullProvider } from '.';
import { GuardsModule } from 'src/api/auth/guards/guards.module';

@Module({
  imports: [UserModule, GuardsModule],
  controllers: [UpdateUserFullController],
  providers: [UpdateUserFullProvider],
  exports: [UpdateUserFullProvider],
})
export class UpdateUserFullModule {}
