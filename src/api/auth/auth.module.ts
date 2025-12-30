import { Module } from "@nestjs/common";
import { RegisterModule } from "./register/register.module";
import { LoginModule } from "./login/login.module";
import { UserModule } from "../user/user.module";

@Module({
    imports: [
        RegisterModule,
        LoginModule,
    ],
    exports: [
        RegisterModule,
        LoginModule,
    ],
})
export class AuthModule {}