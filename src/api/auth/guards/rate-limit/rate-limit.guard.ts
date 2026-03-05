import { CanActivate,ExecutionContext,Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { RateLimitService } from './rate-limit.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class RateLimitGuard implements CanActivate {
    constructor(
        private readonly rateLimitService: RateLimitService,
    ) {}

    canActivate(context: ExecutionContext): Observable<boolean> {
        const request = context.switchToHttp().getRequest<any>();

        if (!request.user || !request.user.roles || !request.user.roles.includes('IP')) 
            return of(true);

        const key = `rate-limit:${request.ip}`;

        return this.rateLimitService.checkLimit(key).pipe(
            switchMap(() => of(true)),
        );
    }
}
