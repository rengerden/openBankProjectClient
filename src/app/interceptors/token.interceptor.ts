import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService : TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let requestIntercepted = request;
    const token = this.tokenService.getAccessToken();
    if(token != null){
      requestIntercepted = request.clone({headers: request.headers.set('Authorization', "Bearer " + token)})
    }
    return next.handle(requestIntercepted);
  }
}
