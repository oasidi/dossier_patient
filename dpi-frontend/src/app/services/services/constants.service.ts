/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ConstantDto } from '../models/constant-dto';
@Injectable({
  providedIn: 'root',
})
class ConstantsService extends __BaseService {
  static readonly savePath = '/api/v1/constants/';
  static readonly findAllByPatientPath = '/api/v1/constants/patient/{patientId}';
  static readonly findByIdPath = '/api/v1/constants/{constantId}';
  static readonly deletePath = '/api/v1/constants/{constantId}';

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
  saveResponse(body?: ConstantDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/constants/`,
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
  save(body?: ConstantDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatientResponse(patientId: number): __Observable<__StrictHttpResponse<Array<ConstantDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/constants/patient/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ConstantDto>>;
      })
    );
  }
  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatient(patientId: number): __Observable<Array<ConstantDto>> {
    return this.findAllByPatientResponse(patientId).pipe(
      __map(_r => _r.body as Array<ConstantDto>)
    );
  }

  /**
   * @param constantId undefined
   * @return successful operation
   */
  findByIdResponse(constantId: number): __Observable<__StrictHttpResponse<ConstantDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/constants/${constantId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ConstantDto>;
      })
    );
  }
  /**
   * @param constantId undefined
   * @return successful operation
   */
  findById(constantId: number): __Observable<ConstantDto> {
    return this.findByIdResponse(constantId).pipe(
      __map(_r => _r.body as ConstantDto)
    );
  }

  /**
   * @param constantId undefined
   * @return successful operation
   */
  deleteResponse(constantId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/constants/${constantId}`,
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
   * @param constantId undefined
   * @return successful operation
   */
  delete(constantId: number): __Observable<string> {
    return this.deleteResponse(constantId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module ConstantsService {
}

export { ConstantsService }
