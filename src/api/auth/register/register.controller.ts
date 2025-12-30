import { Body, Controller, Post } from "@nestjs/common";
import { RegisterUserProvider } from "./register.provider";
import { RegisterDto } from "./dtos/register.dto";

@Controller('auth/register') 
export class RegisterController {

    constructor(
        private readonly registerService: RegisterUserProvider
    ) {}

    @Post()
    register(@Body() dto: RegisterDto ) {
        return this.registerService.execute(dto);
    }

}