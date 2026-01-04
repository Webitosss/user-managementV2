import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterProvider } from '.';
import { CreateUserModule } from 'src/api/user/createUser/createUser.module';

@Module({
  imports: [CreateUserModule],
  controllers: [RegisterController],
  providers: [RegisterProvider],
  exports: [RegisterProvider],
})
export class RegisterModule {}
