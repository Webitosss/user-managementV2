import { IsEmail, IsString } from "class-validator";
import { LoginInterface } from "./login.interface";

export class LoginDto implements LoginInterface {

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}
