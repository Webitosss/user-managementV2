import { Module } from '@nestjs/common';
import { UserModule } from '../../../core/entities/user/user.module';
import { CreateUserController } from './createUser.controller';
import { CreateUserProvider } from '.';
import { GuardsModule } from 'src/api/auth/guards/guards.module';
import { AppJwtModule } from 'src/api/auth/jwt/jwt.module';

@Module({
  imports: [UserModule, GuardsModule, AppJwtModule],
  controllers: [CreateUserController],
  providers: [CreateUserProvider],
  exports: [CreateUserProvider],
})
export class CreateUserModule {}
