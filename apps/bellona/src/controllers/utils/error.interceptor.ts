import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, of } from 'rxjs';
import { BellonaError } from 'src/errors/base-error';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(catchError(error => {
        if (error instanceof BellonaError) {
          context.switchToHttp().getResponse().statusCode = error.code;
          return of({ 'message': error.message, extras: error.extras });
        }

        throw error;
      }));
  }
}
