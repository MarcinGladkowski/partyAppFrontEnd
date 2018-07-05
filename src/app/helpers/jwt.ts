import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const authToken = JSON.parse(localStorage.getItem('authToken'));

        if (authToken) {

            console.log('akcess token is in browser');

            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'x-access-token': authToken
                }
            });
        }

        return next.handle(request);
    }
}

