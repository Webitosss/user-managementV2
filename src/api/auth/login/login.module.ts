import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginProvider } from '.';
import { FindUserByEmailModule } from 'src/api/user/findUserByEmail/findUserByEmail.module';

@Module({
  imports: [
    FindUserByEmailModule,
  ],
  controllers: [LoginController],
  providers: [LoginProvider],
  exports: [LoginProvider],
})
export class LoginModule {}
