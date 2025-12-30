import { ConflictException, Injectable } from "@nestjs/common";
import { RegisterUserProvider } from "./register.provider";
import { UserRepositoryProvider } from "src/core/entities/user/user.repository.provider";
import { RegisterDto } from "./dtos/register.dto";
import * as bcrypt from 'bcrypt';


@Injectable()
export class RegisterUserService implements RegisterUserProvider {

    constructor(
        private readonly userRepository: UserRepositoryProvider
    ) {}

    async execute(data: RegisterDto) {

        const existingUser = await this.userRepository.findByEmail(data.email);

        if (existingUser)
            throw new ConflictException('Email already exists');

        const hashedPassword = await bcrypt.hash(data.password, 10);

        return this.userRepository.create({
            ...data,
            password: hashedPassword
        });

    }

}
