import { Injectable } from "@nestjs/common";
import { RegisterUserProvider } from "./register.provider";
import { RegisterDto } from "./dtos/register.dto";
import * as bcrypt from 'bcrypt';
import { UserService } from "src/core/entities/user/user.service";


@Injectable()
export class RegisterUserService implements RegisterUserProvider {

    constructor(
        private readonly userService: UserService
    ) {}

    async execute(data: RegisterDto) {

        await this.userService.emailExists(data.email);

        const hashedPassword = await bcrypt.hash(data.password, 10);

        return this.userService.create({
            ...data,
            password: hashedPassword
        });

    }

}
