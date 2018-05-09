import {Injectable} from '@angular/core';
import {AuthTokenService} from './auth-token.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class HeadersService {

  constructor(private authToken: AuthTokenService) {
  }

  // Handle Errors

  handleError(error: any): Promise<any> {
    return Promise.reject(error.json().message || error);
  }


  getHeaders() {
    const contentHeaders = new Headers();
    contentHeaders.append('Authorization', `Bearer ${this.authToken.getToken()}`);
    return contentHeaders;
  }

  getClientHeaders() {
    return new HttpHeaders().set('authorization', `Bearer ${this.authToken.getToken()}`);
  }

  getCustomClientHeader(name: string, value: string) {
    return new HttpHeaders().set(name, value);
  }

  getPostHeaders() {
    const contentHeaders = new Headers();
    contentHeaders.append('Authorization', `Bearer ${this.authToken.getToken()}`);
    contentHeaders.append('Content-Type', 'application/json');
    return contentHeaders;
  }

}
