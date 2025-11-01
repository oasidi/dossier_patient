/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContactPersonDto } from '../models/contact-person-dto';
@Injectable({
  providedIn: 'root',
})
class ContactPersonService extends __BaseService {
  static readonly savePath = '/api/v1/contact-person/';
  static readonly findByIdPath = '/api/v1/contact-person/{contactPersonId}';
  static readonly deletePath = '/api/v1/contact-person/{contactPersonId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: ContactPersonDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/contact-person/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: ContactPersonDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param contactPersonId undefined
   * @return successful operation
   */
  findByIdResponse(contactPersonId: number): __Observable<__StrictHttpResponse<ContactPersonDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/contact-person/${contactPersonId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactPersonDto>;
      })
    );
  }
  /**
   * @param contactPersonId undefined
   * @return successful operation
   */
  findById(contactPersonId: number): __Observable<ContactPersonDto> {
    return this.findByIdResponse(contactPersonId).pipe(
      __map(_r => _r.body as ContactPersonDto)
    );
  }

  /**
   * @param contactPersonId undefined
   * @return successful operation
   */
  deleteResponse(contactPersonId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/contact-person/${contactPersonId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param contactPersonId undefined
   * @return successful operation
   */
  delete(contactPersonId: number): __Observable<string> {
    return this.deleteResponse(contactPersonId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module ContactPersonService {
}

export { ContactPersonService }
