/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LightPatientDto } from '../models/light-patient-dto';
import { PatientSearchCriteria } from '../models/patient-search-criteria';
@Injectable({
  providedIn: 'root',
})
class PatientService extends __BaseService {
  static readonly findAllPath = '/api/v1/patients/';
  static readonly savePath = '/api/v1/patients/';
  static readonly findLightPatientByIdPath = '/api/v1/patients/light/{patientId}';
  static readonly searchPatientsPath = '/api/v1/patients/search';
  static readonly deletePath = '/api/v1/patients/{patientId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<LightPatientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/patients/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LightPatientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<LightPatientDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<LightPatientDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: LightPatientDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/patients/`,
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
  save(body?: LightPatientDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  findLightPatientByIdResponse(patientId: number): __Observable<__StrictHttpResponse<LightPatientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/patients/light/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LightPatientDto>;
      })
    );
  }
  /**
   * @param patientId undefined
   * @return successful operation
   */
  findLightPatientById(patientId: number): __Observable<LightPatientDto> {
    return this.findLightPatientByIdResponse(patientId).pipe(
      __map(_r => _r.body as LightPatientDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  searchPatientsResponse(body?: PatientSearchCriteria): __Observable<__StrictHttpResponse<Array<LightPatientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/patients/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LightPatientDto>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  searchPatients(body?: PatientSearchCriteria): __Observable<Array<LightPatientDto>> {
    return this.searchPatientsResponse(body).pipe(
      __map(_r => _r.body as Array<LightPatientDto>)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  deleteResponse(patientId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/patients/${patientId}`,
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
   * @param patientId undefined
   * @return successful operation
   */
  delete(patientId: number): __Observable<string> {
    return this.deleteResponse(patientId).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module PatientService {
}

export { PatientService }
