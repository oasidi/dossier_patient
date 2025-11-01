/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PreferenceDto } from '../models/preference-dto';
@Injectable({
  providedIn: 'root',
})
class PreferencesCasesService extends __BaseService {
  static readonly savePath = '/api/v1/preferences/';
  static readonly findAllByPatientPath = '/api/v1/preferences/patient/{patientId}';
  static readonly findByIdPath = '/api/v1/preferences/{preferenceId}';
  static readonly deletePath = '/api/v1/preferences/{preferenceId}';

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
  saveResponse(body?: PreferenceDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/preferences/`,
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
  save(body?: PreferenceDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatientResponse(patientId: number): __Observable<__StrictHttpResponse<Array<PreferenceDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/preferences/patient/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PreferenceDto>>;
      })
    );
  }
  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatient(patientId: number): __Observable<Array<PreferenceDto>> {
    return this.findAllByPatientResponse(patientId).pipe(
      __map(_r => _r.body as Array<PreferenceDto>)
    );
  }

  /**
   * @param preferenceId undefined
   * @return successful operation
   */
  findByIdResponse(preferenceId: number): __Observable<__StrictHttpResponse<PreferenceDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/preferences/${preferenceId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PreferenceDto>;
      })
    );
  }
  /**
   * @param preferenceId undefined
   * @return successful operation
   */
  findById(preferenceId: number): __Observable<PreferenceDto> {
    return this.findByIdResponse(preferenceId).pipe(
      __map(_r => _r.body as PreferenceDto)
    );
  }

  /**
   * @param preferenceId undefined
   * @return successful operation
   */
  deleteResponse(preferenceId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/preferences/${preferenceId}`,
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
   * @param preferenceId undefined
   * @return successful operation
   */
  delete(preferenceId: number): __Observable<string> {
    return this.deleteResponse(preferenceId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module PreferencesCasesService {
}

export { PreferencesCasesService }
