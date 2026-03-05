import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class VerifyRolesLoggerService implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        const method = request.method;
        const url = request.originalUrl || request.url;

        return next.handle().pipe(
            tap(() => {
                if(!user) return;

                const timestamp = new Date().toISOString();

                console.log(`[${timestamp}]`);
                console.log(`User: ${user.sub || user.id} (${user.email})`);
                console.log(`Roles: ${user.roles}`);
                console.log(`Endpoint: ${method} ${url}`);
                console.log(`Action: Request executed successufully`);
            }),
        );

    }

}