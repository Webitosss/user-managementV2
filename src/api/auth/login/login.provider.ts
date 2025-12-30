import { LoginDto } from "./dtos/login.dto";

export abstract class LoginUserProvider {
    public abstract execute(data: LoginDto): Promise<{ token: string }>;
}
