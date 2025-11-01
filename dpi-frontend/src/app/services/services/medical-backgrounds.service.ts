/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MedicalBackgroundDto } from '../models/medical-background-dto';
@Injectable({
  providedIn: 'root',
})
class MedicalBackgroundsService extends __BaseService {
  static readonly savePath = '/api/v1/medical-backgrounds/';
  static readonly findAllByPatientIdPath = '/api/v1/medical-backgrounds/patient/{patientId}';
  static readonly findByIdPath = '/api/v1/medical-backgrounds/{medicalBackgroundId}';
  static readonly deletePath = '/api/v1/medical-backgrounds/{medicalBackgroundId}';

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
  saveResponse(body?: MedicalBackgroundDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/medical-backgrounds/`,
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
  save(body?: MedicalBackgroundDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatientIdResponse(patientId: number): __Observable<__StrictHttpResponse<Array<MedicalBackgroundDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-backgrounds/patient/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MedicalBackgroundDto>>;
      })
    );
  }
  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatientId(patientId: number): __Observable<Array<MedicalBackgroundDto>> {
    return this.findAllByPatientIdResponse(patientId).pipe(
      __map(_r => _r.body as Array<MedicalBackgroundDto>)
    );
  }

  /**
   * @param medicalBackgroundId undefined
   * @return successful operation
   */
  findByIdResponse(medicalBackgroundId: number): __Observable<__StrictHttpResponse<MedicalBackgroundDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-backgrounds/${medicalBackgroundId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MedicalBackgroundDto>;
      })
    );
  }
  /**
   * @param medicalBackgroundId undefined
   * @return successful operation
   */
  findById(medicalBackgroundId: number): __Observable<MedicalBackgroundDto> {
    return this.findByIdResponse(medicalBackgroundId).pipe(
      __map(_r => _r.body as MedicalBackgroundDto)
    );
  }

  /**
   * @param medicalBackgroundId undefined
   * @return successful operation
   */
  deleteResponse(medicalBackgroundId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/medical-backgrounds/${medicalBackgroundId}`,
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
   * @param medicalBackgroundId undefined
   * @return successful operation
   */
  delete(medicalBackgroundId: number): __Observable<string> {
    return this.deleteResponse(medicalBackgroundId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module MedicalBackgroundsService {
}

export { MedicalBackgroundsService }
