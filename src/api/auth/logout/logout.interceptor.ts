import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogoutInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return next.handle().pipe(
            tap(() => {
                console.log(`[LOGOUT] User ${user?.email ?? user?.id} closed session`);
            }),
        );

    }
    
}