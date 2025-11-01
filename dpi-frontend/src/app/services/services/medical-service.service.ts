/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MedicalServiceDto } from '../models/medical-service-dto';
@Injectable({
  providedIn: 'root',
})
class MedicalServiceService extends __BaseService {
  static readonly findAllPath = '/api/v1/medical-services/';
  static readonly savePath = '/api/v1/medical-services/';
  static readonly findByIdPath = '/api/v1/medical-services/{medicalServiceId}';
  static readonly deletePath = '/api/v1/medical-services/{medicalServiceId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<MedicalServiceDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-services/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MedicalServiceDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<MedicalServiceDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<MedicalServiceDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: MedicalServiceDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/medical-services/`,
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
  save(body?: MedicalServiceDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param medicalServiceId undefined
   * @return successful operation
   */
  findByIdResponse(medicalServiceId: number): __Observable<__StrictHttpResponse<MedicalServiceDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-services/${medicalServiceId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MedicalServiceDto>;
      })
    );
  }
  /**
   * @param medicalServiceId undefined
   * @return successful operation
   */
  findById(medicalServiceId: number): __Observable<MedicalServiceDto> {
    return this.findByIdResponse(medicalServiceId).pipe(
      __map(_r => _r.body as MedicalServiceDto)
    );
  }

  /**
   * @param medicalServiceId undefined
   * @return successful operation
   */
  deleteResponse(medicalServiceId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/medical-services/${medicalServiceId}`,
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
   * @param medicalServiceId undefined
   * @return successful operation
   */
  delete(medicalServiceId: number): __Observable<string> {
    return this.deleteResponse(medicalServiceId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module MedicalServiceService {
}

export { MedicalServiceService }
