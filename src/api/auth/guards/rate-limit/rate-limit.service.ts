import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { Observable, from, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class RateLimitService {

    private readonly MAX_REQUESTS = 5;
    private readonly WINDOW_TIME = 60; 

    constructor(
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
    ) {}

    checkLimit(key: string): Observable<boolean> {
        return from(this.cacheManager.get<number>(key)).pipe(
            switchMap((current) => {
                const count = current ?? 0;

                if (count >= this.MAX_REQUESTS) {
                    return throwError(() => 
                        new HttpException('Too many requests', HttpStatus.TOO_MANY_REQUESTS)
                    );
                }

                return from(
                    this.cacheManager.set(
                        key,
                        count + 1,
                        this.WINDOW_TIME * 1000,
                    ),
                ).pipe(switchMap(() => of(true)));
            }),
        );
    }
    
}
