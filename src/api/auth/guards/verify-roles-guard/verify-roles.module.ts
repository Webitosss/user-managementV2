import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { VerifyRolesGuard } from './verify-roles.guard';
import { VerifyRolesLoggerService } from './verify-roles-logger.service';

@Module({
  providers: [
    VerifyRolesGuard,
    {
      provide: APP_INTERCEPTOR,
      useClass: VerifyRolesLoggerService,
    },
  ],
  exports: [VerifyRolesGuard],
})
export class VerifyRolesModule {}
