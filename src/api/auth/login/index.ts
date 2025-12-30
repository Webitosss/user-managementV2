import { Provider } from "@nestjs/common";
import { LoginUserProvider } from "./login.provider";
import { LoginUserService } from "./login.service";

export const LoginProvider: Provider = {
    provide: LoginUserProvider,
    useClass: LoginUserService
}
