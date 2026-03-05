import { Module } from "@nestjs/common";
import { VerifyRolesModule } from "./verify-roles-guard/verify-roles.module";
import { TokenAuthModule } from "./token-auth-validation/token-auth.module";
import { RateLimitModule } from "./rate-limit/rate-limit.module";

@Module({
    imports: [TokenAuthModule, VerifyRolesModule, RateLimitModule],
    exports: [TokenAuthModule, VerifyRolesModule, RateLimitModule],
})
export class GuardsModule {}
