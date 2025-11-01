/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MedicalCaseTypeDto } from '../models/medical-case-type-dto';
@Injectable({
  providedIn: 'root',
})
class MedicalCasesTypesService extends __BaseService {
  static readonly findAllPath = '/api/v1/medical-case-types/';
  static readonly savePath = '/api/v1/medical-case-types/';
  static readonly findByIdPath = '/api/v1/medical-case-types/{medicalCaseTypeId}';
  static readonly deletePath = '/api/v1/medical-case-types/{medicalCaseTypeId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<MedicalCaseTypeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-case-types/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MedicalCaseTypeDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<MedicalCaseTypeDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<MedicalCaseTypeDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: MedicalCaseTypeDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/medical-case-types/`,
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
  save(body?: MedicalCaseTypeDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param medicalCaseTypeId undefined
   * @return successful operation
   */
  findByIdResponse(medicalCaseTypeId: number): __Observable<__StrictHttpResponse<MedicalCaseTypeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-case-types/${medicalCaseTypeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MedicalCaseTypeDto>;
      })
    );
  }
  /**
   * @param medicalCaseTypeId undefined
   * @return successful operation
   */
  findById(medicalCaseTypeId: number): __Observable<MedicalCaseTypeDto> {
    return this.findByIdResponse(medicalCaseTypeId).pipe(
      __map(_r => _r.body as MedicalCaseTypeDto)
    );
  }

  /**
   * @param medicalCaseTypeId undefined
   * @return successful operation
   */
  deleteResponse(medicalCaseTypeId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/medical-case-types/${medicalCaseTypeId}`,
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
   * @param medicalCaseTypeId undefined
   * @return successful operation
   */
  delete(medicalCaseTypeId: number): __Observable<string> {
    return this.deleteResponse(medicalCaseTypeId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module MedicalCasesTypesService {
}

export { MedicalCasesTypesService }
