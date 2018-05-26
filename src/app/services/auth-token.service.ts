
import {throttleTime} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';




const AUTH_HEADER = 'Authorization';
const AUTH_BEARER = 'Bearer';
const TOKEN_STORAGE_KEY = 'Conform_token';

@Injectable()
export class AuthTokenService {
  private storage;
  private _tokenChanged = new BehaviorSubject<any>(null);


  constructor() {
    this.storage = window.localStorage;
    this._tokenChanged.pipe(throttleTime(2000)).subscribe(token => {
      if (token) { this.persist(token); }
    });
  }

  get onTokenChange(): Observable<string> {
    return this._tokenChanged;
  }

  get token(): string {
    return this._tokenChanged.getValue();
  }

  set token(value: string) {
    this._tokenChanged.next(value);
  }

  getToken(): string {
    return this.readToken();
  }

  setToken(value: string) {
    this.token = value;
    if (!value) { this.clear(); }
  }

  persist(token?: string) {
    token = token || this.token;
    this.storage.setItem(TOKEN_STORAGE_KEY, token);
  }

  readToken(): string {
    return this.storage.getItem(TOKEN_STORAGE_KEY);
  }

  restore(): boolean {
    const token = this.readToken();
    if (token) {
      this.token = token;
      return true;
    }
    return false;
  }

  clear() {
    this.token = null;
    this.storage.removeItem(TOKEN_STORAGE_KEY);
  }

}
