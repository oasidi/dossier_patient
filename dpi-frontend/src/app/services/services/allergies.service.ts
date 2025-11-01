/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AllergyDto } from '../models/allergy-dto';
@Injectable({
  providedIn: 'root',
})
class AllergiesService extends __BaseService {
  static readonly savePath = '/api/v1/allergies/';
  static readonly findAllByPatientPath = '/api/v1/allergies/patient/{patientId}';
  static readonly findByIdPath = '/api/v1/allergies/{allergyId}';
  static readonly deletePath = '/api/v1/allergies/{allergyId}';

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
  saveResponse(body?: AllergyDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/allergies/`,
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
  save(body?: AllergyDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatientResponse(patientId: number): __Observable<__StrictHttpResponse<Array<AllergyDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/allergies/patient/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AllergyDto>>;
      })
    );
  }
  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatient(patientId: number): __Observable<Array<AllergyDto>> {
    return this.findAllByPatientResponse(patientId).pipe(
      __map(_r => _r.body as Array<AllergyDto>)
    );
  }

  /**
   * @param allergyId undefined
   * @return successful operation
   */
  findByIdResponse(allergyId: number): __Observable<__StrictHttpResponse<AllergyDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/allergies/${allergyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AllergyDto>;
      })
    );
  }
  /**
   * @param allergyId undefined
   * @return successful operation
   */
  findById(allergyId: number): __Observable<AllergyDto> {
    return this.findByIdResponse(allergyId).pipe(
      __map(_r => _r.body as AllergyDto)
    );
  }

  /**
   * @param allergyId undefined
   * @return successful operation
   */
  deleteResponse(allergyId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/allergies/${allergyId}`,
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
   * @param allergyId undefined
   * @return successful operation
   */
  delete(allergyId: number): __Observable<string> {
    return this.deleteResponse(allergyId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module AllergiesService {
}

export { AllergiesService }
