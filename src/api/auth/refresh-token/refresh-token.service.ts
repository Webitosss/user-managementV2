import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { map, Observable, of, switchMap, throwError } from 'rxjs';
import { RefreshTokenProvider } from './refresh-token.provider';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

@Injectable()
export class RefreshTokenService implements RefreshTokenProvider {

    constructor(
        private readonly jwtService: JwtService
    ) {}

    execute(data: RefreshTokenDto): Observable<{ accessToken: string }> {
        const payload = data.user;
        return of(payload).pipe(

            switchMap((payload) => {
                if (!payload) {
                return throwError(
                    () => new UnauthorizedException('Invalid token'),
                );
                }
                
                return of(payload);
            }),

            switchMap((payload) => {
                const now = Math.floor(Date.now() / 1000);

                if (payload.exp < now) {
                return throwError(
                    () => new UnauthorizedException('Token has expired',),
                );
                }

                return of(payload);
            }),

            switchMap((payload) => {
                if (!payload.roles || !payload.roles.includes('REFRESH')) {
                return throwError(
                    () =>
                    new ForbiddenException(
                        'User does not have REFRESH role',
                    ),
                );
                }

                return of(payload);
            }),

            map((payload) => {
                const accessToken = this.jwtService.sign(
                {
                    sub: payload.id,
                    id: payload.id,
                    email: payload.email,
                    roles: payload.roles,
                },
                {
                    expiresIn: '30m',
                },
                );

                return { accessToken };
            }),

        );
        
    }
}
