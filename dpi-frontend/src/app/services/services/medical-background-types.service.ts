/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MedicalBackgroundTypeDto } from '../models/medical-background-type-dto';
@Injectable({
  providedIn: 'root',
})
class MedicalBackgroundTypesService extends __BaseService {
  static readonly findAllPath = '/api/v1/medical-background-types/';
  static readonly savePath = '/api/v1/medical-background-types/';
  static readonly findByIdPath = '/api/v1/medical-background-types/{medicalBackgroundTypeId}';
  static readonly deletePath = '/api/v1/medical-background-types/{medicalBackgroundTypeId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<MedicalBackgroundTypeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-background-types/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MedicalBackgroundTypeDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<MedicalBackgroundTypeDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<MedicalBackgroundTypeDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: MedicalBackgroundTypeDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/medical-background-types/`,
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
  save(body?: MedicalBackgroundTypeDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param medicalBackgroundTypeId undefined
   * @return successful operation
   */
  findByIdResponse(medicalBackgroundTypeId: number): __Observable<__StrictHttpResponse<MedicalBackgroundTypeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-background-types/${medicalBackgroundTypeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MedicalBackgroundTypeDto>;
      })
    );
  }
  /**
   * @param medicalBackgroundTypeId undefined
   * @return successful operation
   */
  findById(medicalBackgroundTypeId: number): __Observable<MedicalBackgroundTypeDto> {
    return this.findByIdResponse(medicalBackgroundTypeId).pipe(
      __map(_r => _r.body as MedicalBackgroundTypeDto)
    );
  }

  /**
   * @param medicalBackgroundTypeId undefined
   * @return successful operation
   */
  deleteResponse(medicalBackgroundTypeId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/medical-background-types/${medicalBackgroundTypeId}`,
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
   * @param medicalBackgroundTypeId undefined
   * @return successful operation
   */
  delete(medicalBackgroundTypeId: number): __Observable<string> {
    return this.deleteResponse(medicalBackgroundTypeId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module MedicalBackgroundTypesService {
}

export { MedicalBackgroundTypesService }
