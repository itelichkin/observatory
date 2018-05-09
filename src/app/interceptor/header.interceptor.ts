import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthTokenService} from '../services/auth-token.service';
import {ErrorService} from '../services/error.service';
import 'rxjs/add/operator/do';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private authToken: AuthTokenService,
              private errorService: ErrorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newRequest;
   /* newRequest = req.clone({
      headers: req.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000').set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    });
    console.log(newRequest)*/

  /*if (!req.headers.get('Authorization')) {
    newRequest = req.clone({
    //  headers: req.headers.set('Authorization', `Bearer ${this.authToken.getToken()}`)
     headers: req.headers.set('Access-Control-Allow-Origin', '*')

    });
  }*/
    return next.handle(newRequest ? newRequest : req)
      .do((res) => {
        /*if (res instanceof HttpResponse) {
          this.authToken.setToken(res.headers.get('Conform_token'));
        }*/
      }, (error) => {
        this.errorService.errorResponse(error);
      });
  }

}
