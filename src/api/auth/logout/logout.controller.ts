import { Controller, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import type { Request } from 'express';
import { LogoutService } from './logout.service';
import { LogoutInterceptor } from './logout.interceptor';
import { TokenAuthGuard } from '../guards/token-auth-validation/token-auth.guard';

@Controller('auth/logout')
export class LogoutController {
    constructor(
        private readonly logoutService: LogoutService,
    ) {}

    @Post()
    @UseGuards(TokenAuthGuard)
    @UseInterceptors(LogoutInterceptor)
    logout(@Req() request: Request) {
        const authHeader = request.headers.authorization;

        if (!authHeader) 
            throw new Error('Authorization header not found');

        const token = authHeader.split(' ')[1];
        const user = request['user'];

        return this.logoutService.blacklistToken(
            token,
            user.exp,
        );
    }

}
