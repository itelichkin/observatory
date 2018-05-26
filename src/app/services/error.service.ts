import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';

@Injectable()
export class ErrorService {

  private _onError: Subject<any> = new Subject<any>();

  constructor() {
  }

  get onError(): Observable<any> {
    return this._onError;
  }

  errorJavaScript(err) {
    this._onError.next(err);
    console.log('errorJavaScript', err);

  }

  errorResponse(error) {
    this._onError.next(error);
    console.log('errorResponse', error.status, error);
  }
}
