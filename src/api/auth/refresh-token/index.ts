import { Provider } from "@nestjs/common";
import { RefreshTokenProvider } from "./refresh-token.provider";
import { RefreshTokenService } from "./refresh-token.service";

export const RefreshTokenProviderBinding: Provider = {
    provide: RefreshTokenProvider,
    useClass: RefreshTokenService,
}