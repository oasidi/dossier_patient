/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MedicalCaseDto } from '../models/medical-case-dto';
@Injectable({
  providedIn: 'root',
})
class MedicalCasesService extends __BaseService {
  static readonly savePath = '/api/v1/medical-cases/';
  static readonly findAllByPatientPath = '/api/v1/medical-cases/patient/{patientId}';
  static readonly findByIdPath = '/api/v1/medical-cases/{caseId}';
  static readonly deletePath = '/api/v1/medical-cases/{caseId}';

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
  saveResponse(body?: MedicalCaseDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/medical-cases/`,
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
  save(body?: MedicalCaseDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatientResponse(patientId: number): __Observable<__StrictHttpResponse<Array<MedicalCaseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-cases/patient/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MedicalCaseDto>>;
      })
    );
  }
  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatient(patientId: number): __Observable<Array<MedicalCaseDto>> {
    return this.findAllByPatientResponse(patientId).pipe(
      __map(_r => _r.body as Array<MedicalCaseDto>)
    );
  }

  /**
   * @param caseId undefined
   * @return successful operation
   */
  findByIdResponse(caseId: number): __Observable<__StrictHttpResponse<MedicalCaseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/medical-cases/${caseId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MedicalCaseDto>;
      })
    );
  }
  /**
   * @param caseId undefined
   * @return successful operation
   */
  findById(caseId: number): __Observable<MedicalCaseDto> {
    return this.findByIdResponse(caseId).pipe(
      __map(_r => _r.body as MedicalCaseDto)
    );
  }

  /**
   * @param caseId undefined
   * @return successful operation
   */
  deleteResponse(caseId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/medical-cases/${caseId}`,
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
   * @param caseId undefined
   * @return successful operation
   */
  delete(caseId: number): __Observable<string> {
    return this.deleteResponse(caseId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module MedicalCasesService {
}

export { MedicalCasesService }
