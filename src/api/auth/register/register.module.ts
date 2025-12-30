import { Module } from "@nestjs/common";
import { RegisterController } from "./register.controller";
import { RegisterProvider } from ".";
import { UserModule } from "src/core/entities/user/user.module";
import { UserService } from "src/core/entities/user/user.service";

@Module({
    imports: [UserModule],
    controllers: [RegisterController],
    providers: [RegisterProvider],
    exports: [RegisterProvider],
})
export class RegisterModule {}
