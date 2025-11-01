/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ConstantTypeDto } from '../models/constant-type-dto';
@Injectable({
  providedIn: 'root',
})
class ConstantsTypesService extends __BaseService {
  static readonly findAllPath = '/api/v1/constant-types/';
  static readonly savePath = '/api/v1/constant-types/';
  static readonly findByIdPath = '/api/v1/constant-types/{constantTypeId}';
  static readonly deletePath = '/api/v1/constant-types/{constantTypeId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ConstantTypeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/constant-types/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ConstantTypeDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<ConstantTypeDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ConstantTypeDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: ConstantTypeDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/constant-types/`,
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
  save(body?: ConstantTypeDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param constantTypeId undefined
   * @return successful operation
   */
  findByIdResponse(constantTypeId: number): __Observable<__StrictHttpResponse<ConstantTypeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/constant-types/${constantTypeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ConstantTypeDto>;
      })
    );
  }
  /**
   * @param constantTypeId undefined
   * @return successful operation
   */
  findById(constantTypeId: number): __Observable<ConstantTypeDto> {
    return this.findByIdResponse(constantTypeId).pipe(
      __map(_r => _r.body as ConstantTypeDto)
    );
  }

  /**
   * @param constantTypeId undefined
   * @return successful operation
   */
  deleteResponse(constantTypeId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/constant-types/${constantTypeId}`,
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
   * @param constantTypeId undefined
   * @return successful operation
   */
  delete(constantTypeId: number): __Observable<string> {
    return this.deleteResponse(constantTypeId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module ConstantsTypesService {
}

export { ConstantsTypesService }
