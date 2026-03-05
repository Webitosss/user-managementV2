import { RefreshTokenDto } from "./dtos/refresh-token.dto";

export abstract class RefreshTokenProvider {
    public abstract execute(data: RefreshTokenDto): any;
}