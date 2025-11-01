/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AllergyTypeDto } from '../models/allergy-type-dto';
@Injectable({
  providedIn: 'root',
})
class AllergyTypesService extends __BaseService {
  static readonly findAllPath = '/api/v1/allergy-types/';
  static readonly savePath = '/api/v1/allergy-types/';
  static readonly findByIdPath = '/api/v1/allergy-types/{allergyTypeId}';
  static readonly deletePath = '/api/v1/allergy-types/{allergyTypeId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<AllergyTypeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/allergy-types/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AllergyTypeDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<AllergyTypeDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<AllergyTypeDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: AllergyTypeDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/allergy-types/`,
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
  save(body?: AllergyTypeDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param allergyTypeId undefined
   * @return successful operation
   */
  findByIdResponse(allergyTypeId: number): __Observable<__StrictHttpResponse<AllergyTypeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/allergy-types/${allergyTypeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AllergyTypeDto>;
      })
    );
  }
  /**
   * @param allergyTypeId undefined
   * @return successful operation
   */
  findById(allergyTypeId: number): __Observable<AllergyTypeDto> {
    return this.findByIdResponse(allergyTypeId).pipe(
      __map(_r => _r.body as AllergyTypeDto)
    );
  }

  /**
   * @param allergyTypeId undefined
   * @return successful operation
   */
  deleteResponse(allergyTypeId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/allergy-types/${allergyTypeId}`,
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
   * @param allergyTypeId undefined
   * @return successful operation
   */
  delete(allergyTypeId: number): __Observable<string> {
    return this.deleteResponse(allergyTypeId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module AllergyTypesService {
}

export { AllergyTypesService }
