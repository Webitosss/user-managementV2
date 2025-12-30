import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginUserProvider } from './login.provider';
import { UserRepositoryProvider } from 'src/core/entities/user/user.repository.provider';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class LoginUserService implements LoginUserProvider {

    constructor(
        private readonly userRepository: UserRepositoryProvider,
        private readonly jwtService: JwtService,
    ) {}

    async execute(data: LoginDto){
        
        const user = await this.userRepository.findByEmail(data.email);

        if (!user)
            throw new NotFoundException('User does not exist');

        if (!user.isActive)
            throw new NotFoundException('User is disabled');

        const isValid = await bcrypt.compare(data.password, user.password);

        if (!isValid)
            throw new UnauthorizedException('Invalid credentials');

        const payload = {
            sub: user.id,
            id: user.id,
            email: user.email,
            roles: user.roles,
        }

        const token = await this.jwtService.signAsync(payload, {
            expiresIn: '30m',
        });

        return { token };

    }

}
