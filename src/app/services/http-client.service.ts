import {Injectable} from '@angular/core';
import {HeadersService} from './headers.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface ObservatoryHttpRequestOptions {
  method: string;
  url: string;
  data?;
}


@Injectable()
export class HttpClientService {

  constructor(private httpClient: HttpClient,
              private headersService: HeadersService) {
  }

  private compileRequest(options) {

    switch (options.method) {
      case 'get':
        return this.httpClient[options.method].call(this.httpClient, `${options.url}`,
          {observe: 'response', responseType: 'text'});
      case 'put':
      case  'post':
      case  'delete':
      case 'patch':
        return this.httpClient[options.method].call(this.httpClient,
          `${options.url}`, options.data, {observe: 'response', responseType: 'text'});
    }
  }

  private static toQuery(args: any): string {
    if (!args) return '';
    const a = [];
    Object.keys(args).forEach(x => {
      a.push(encodeURIComponent(x) + '=' + encodeURIComponent(args[x]));
    });
    return a.length ? ('?' + a.join('&')) : '';
  }

  private request(options: ObservatoryHttpRequestOptions) {

    const promise = new Promise<any>((resolve) => {
      this.compileRequest(options).subscribe((value) => {
        resolve(value);
      });
    });
    return promise;
  }

  public get(url: string, args?: any): Promise<any> {
    url = url + HttpClientService.toQuery(args);
    return this.request({method: 'get', url: `${environment.apiHost}${url}`});
  }

  public delete(url: string, args?: any): Promise<any> {
    url = url + HttpClientService.toQuery(args);
    return this.request({method: 'delete', url: `${environment.apiHost}${url}`});
  }


  public post(url: string, data?): Promise<any> {
    return this.request({method: 'post', url: `${environment.apiHost}${url}`, data: (data || {})});
  }

  public put(url: string, data): Promise<any> {
    return this.request({method: 'put', url: `${environment.apiHost}${url}`, data: (data || {})});
  }

  public patch(url: string, data): Promise<any> {
    return this.request({method: 'patch', url: `${environment.apiHost}${url}`, data: (data || {})});
  }

  async login(loginBasic: string): Promise<any> {
    const headers = this.headersService.getCustomClientHeader('Authorization', loginBasic);
    const promise = new Promise<any>(async (resolve) => {
      const authRes = await this.httpClient.post(`${environment.apiHost}/api/login`,
        {}, {headers: headers, observe: 'response'}).subscribe((value) => {
        resolve(value);
      });
    });
    return promise;
  }

}
