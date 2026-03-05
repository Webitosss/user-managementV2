import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { LogoutService } from "./logout.service";
import { LogoutController } from "./logout.controller";
import { LogoutInterceptor } from "./logout.interceptor";

@Module({
    imports: [
        CacheModule.register(),
    ],
    controllers: [LogoutController],
    providers: [LogoutService, LogoutInterceptor],
    exports: [LogoutService],
})
export class LogoutModule {}