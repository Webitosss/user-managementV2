import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { RateLimitGuard } from './rate-limit.guard';
import { RateLimitService } from './rate-limit.service';

@Module({
    imports: [CacheModule.register()],
    providers: [RateLimitGuard, RateLimitService],
    exports: [RateLimitGuard, RateLimitService],
})
export class RateLimitModule {}
