import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    // Clone the request to add the authorization header if needed
    const clonedRequest = this.addAuthorizationHeader(request);

    // Handle the response
    return next.handle(clonedRequest).pipe(
      tap(
      {
        next:(event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // Check the response for any token expiration status
            if (event.status === 401) {
              this.authService.logout(); // Logout if token has expired
            }
          }
        },
        error:(error: any) => {
          // Handle any error responses
          if (error.status === 401) {
            this.authService.logout(); // Logout if token has expired
          }
        }
      }
      )
    );
  }


    private addAuthorizationHeader(request: HttpRequest<any>): HttpRequest<any> {
      // Retrieve the token from localStorage
      const token = this.authService.getToken();

      // Add the token to the request headers if it exists
      if (token) {
        return request.clone({
          setHeaders: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });
      }

      return request;
  }
}






























// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpResponse
// } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable()
// export class HeadersInterceptor implements HttpInterceptor {

//   constructor(private authService: AuthService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

//     const user = this.authService.currentUser;
//     if(user.jwtToken)
//     {
//       request = request.clone({
//         setHeaders:{
//           Authorization : `Bearer ${user.jwtToken}`
//         }
//       })
//     }
//     return next.handle(request);


//   }
// }


























