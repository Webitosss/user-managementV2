import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepositoryProvider } from "./user.repository.provider";

@Injectable()
export class UserService {

    constructor(
        private readonly userRepository: UserRepositoryProvider, 
    ) {}

    async findByEmailOrFail(email: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (!user.isActive) {
            throw new NotFoundException('User is disabled');
        }

        return user;
    }

    async emailExists(email: string) {
        const user = await this.userRepository.findByEmail(email);

        if (user) {
            throw new ConflictException('Email already exists');
        }
    }

    async create(data: any) {
        return this.userRepository.create(data);
    }

}
