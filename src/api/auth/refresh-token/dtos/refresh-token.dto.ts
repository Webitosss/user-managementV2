import { Expose } from "class-transformer";
import { RefreshTokenInterface } from "./refresh-token.interface";

export class RefreshTokenDto implements RefreshTokenInterface {
    @Expose()
    user: any;
}