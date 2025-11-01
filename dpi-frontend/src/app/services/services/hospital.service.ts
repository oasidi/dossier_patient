/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { HospitalDto } from '../models/hospital-dto';
@Injectable({
  providedIn: 'root',
})
class HospitalService extends __BaseService {
  static readonly findAllPath = '/api/v1/hospitals/';
  static readonly savePath = '/api/v1/hospitals/';
  static readonly getHospitalInformationPath = '/api/v1/hospitals/information';
  static readonly findByIdPath = '/api/v1/hospitals/{hospitalId}';
  static readonly deletePath = '/api/v1/hospitals/{hospitalId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<HospitalDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/hospitals/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<HospitalDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<HospitalDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<HospitalDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: HospitalDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/hospitals/`,
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
  save(body?: HospitalDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @return successful operation
   */
  getHospitalInformationResponse(): __Observable<__StrictHttpResponse<HospitalDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/hospitals/information`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<HospitalDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getHospitalInformation(): __Observable<HospitalDto> {
    return this.getHospitalInformationResponse().pipe(
      __map(_r => _r.body as HospitalDto)
    );
  }

  /**
   * @param hospitalId undefined
   * @return successful operation
   */
  findByIdResponse(hospitalId: number): __Observable<__StrictHttpResponse<HospitalDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/hospitals/${hospitalId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<HospitalDto>;
      })
    );
  }
  /**
   * @param hospitalId undefined
   * @return successful operation
   */
  findById(hospitalId: number): __Observable<HospitalDto> {
    return this.findByIdResponse(hospitalId).pipe(
      __map(_r => _r.body as HospitalDto)
    );
  }

  /**
   * @param hospitalId undefined
   * @return successful operation
   */
  deleteResponse(hospitalId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/hospitals/${hospitalId}`,
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
   * @param hospitalId undefined
   * @return successful operation
   */
  delete(hospitalId: number): __Observable<string> {
    return this.deleteResponse(hospitalId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module HospitalService {
}

export { HospitalService }
