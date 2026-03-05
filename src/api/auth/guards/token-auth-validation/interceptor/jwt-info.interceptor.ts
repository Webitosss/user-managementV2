import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class JwtInfoInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        return next.handle().pipe(
            tap(() => {
                if (!user) return;

                const now = Math.floor(Date.now() / 1000);
                const exp = user.exp;
                const iat = user.iat;
                const remainingSeconds = exp - now;
                const remainingMinutes = Math.floor(remainingSeconds / 60);

                console.log('[JWT Info] Valid Token');
                console.log(`- User ID: ${user.sub || user.id}`);
                console.log(`- Email: ${user.email}`);
                console.log(`- Roles: ${user.roles}`);
                console.log(`- Issued at: ${new Date(iat * 1000).toISOString()}`);
                console.log(`- Expires at: ${new Date(exp * 1000).toISOString()}`);
                console.log(`- Time remaining: ${remainingMinutes} minutes`);
            })
        );

    }

}
