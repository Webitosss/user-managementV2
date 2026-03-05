import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { GuardsModule } from './guards/guards.module';
import { LogoutModule } from './logout/logout.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';
import { AppJwtModule } from './jwt/jwt.module';

@Module({
  imports: [
    AppJwtModule,
    RegisterModule, 
    LoginModule, 
    GuardsModule, 
    LogoutModule, 
    RefreshTokenModule,
  ],
  exports: [
    RegisterModule, 
    LoginModule, 
    GuardsModule, 
    LogoutModule, 
    RefreshTokenModule,
  ],
})
export class AuthModule {}
