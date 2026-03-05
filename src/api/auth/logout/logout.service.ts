import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { from, map, Observable } from 'rxjs';
import type { Cache } from 'cache-manager';

@Injectable()
export class LogoutService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  blacklistToken(
    token: string,
    expiresAt: number,
  ): Observable<void> {
    const ttl = expiresAt - Math.floor(Date.now() / 1000);

    return from(
      this.cacheManager.set(
        `blacklist:${token}`,
        true,
        ttl > 0 ? ttl : 0,
      ),
    ).pipe(
      map(() => undefined),
    );
  }

  isTokenBlacklisted(token: string): Observable<boolean> {
    return from(
      this.cacheManager.get<boolean>(`blacklist:${token}`),
    ).pipe(
      map(Boolean),
    );
  }
}
