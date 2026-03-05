import { Module } from "@nestjs/common";
import { TokenAuthGuard } from "./token-auth.guard";

@Module({
    providers: [TokenAuthGuard],
    exports: [TokenAuthGuard],
})
export class TokenAuthModule {}
