import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
import { CallService } from '../services/call.service';
import { environment } from '../config';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private callService:CallService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloedRequest=request.clone()
    if(request.url.includes(environment.DECENT_API_URL)){
      cloedRequest = request.clone({
        headers: request.headers
          .set('Authorization', localStorage.getItem('access_token')||"aa"),
      });
      this.callService.refrehToken().subscribe({
        next:(res:any)=>{
          localStorage.setItem('access_token', 'Bearer ' + res['access_token']);
          localStorage.setItem('refresh_token', res['refresh_token']);
        },
        error:()=>{
          this.callService.getCode()
        }
      })
    }
    
    
    return next.handle(cloedRequest).pipe(catchError((err:any)=>{
      if(request.url.includes(environment.KEYCLOAK_AUTH_URI )){
        this.callService.getCode()
      } 
      return EMPTY
    }));
  }
}
