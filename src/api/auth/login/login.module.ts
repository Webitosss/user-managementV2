import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginProvider } from '.';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/core/entities/user/user.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginProvider],
  exports: [LoginProvider]
})
export class LoginModule {}
