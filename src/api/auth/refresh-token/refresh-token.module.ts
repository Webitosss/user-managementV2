import { Module } from '@nestjs/common';
import { RefreshTokenController } from './refresh-token.controller';
import { RefreshTokenProviderBinding } from '.';

@Module({
  controllers: [RefreshTokenController],
  providers: [RefreshTokenProviderBinding],
  exports: [RefreshTokenProviderBinding],
})
export class RefreshTokenModule {}
