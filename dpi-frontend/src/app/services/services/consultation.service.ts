/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ConsultationDto } from '../models/consultation-dto';
@Injectable({
  providedIn: 'root',
})
class ConsultationService extends __BaseService {
  static readonly findAllPath = '/api/v1/consultations/';
  static readonly savePath = '/api/v1/consultations/';
  static readonly findAllByDoctorIdPath = '/api/v1/consultations/by/doctor/{doctorId}';
  static readonly findAllByPatientIdPath = '/api/v1/consultations/by/patient/{patientId}';
  static readonly findAllByServicePath = '/api/v1/consultations/by/service/{serviceId}';
  static readonly changeConsultationStatusPath = '/api/v1/consultations/update/status';
  static readonly findByIdPath = '/api/v1/consultations/{consultationId}';
  static readonly deletePath = '/api/v1/consultations/{consultationId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ConsultationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/consultations/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ConsultationDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<ConsultationDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ConsultationDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: ConsultationDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/consultations/`,
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
  save(body?: ConsultationDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param doctorId undefined
   * @return successful operation
   */
  findAllByDoctorIdResponse(doctorId: string): __Observable<__StrictHttpResponse<Array<ConsultationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/consultations/by/doctor/${doctorId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ConsultationDto>>;
      })
    );
  }
  /**
   * @param doctorId undefined
   * @return successful operation
   */
  findAllByDoctorId(doctorId: string): __Observable<Array<ConsultationDto>> {
    return this.findAllByDoctorIdResponse(doctorId).pipe(
      __map(_r => _r.body as Array<ConsultationDto>)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatientIdResponse(patientId: number): __Observable<__StrictHttpResponse<Array<ConsultationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/consultations/by/patient/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ConsultationDto>>;
      })
    );
  }
  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllByPatientId(patientId: number): __Observable<Array<ConsultationDto>> {
    return this.findAllByPatientIdResponse(patientId).pipe(
      __map(_r => _r.body as Array<ConsultationDto>)
    );
  }

  /**
   * @param serviceId undefined
   * @return successful operation
   */
  findAllByServiceResponse(serviceId: number): __Observable<__StrictHttpResponse<Array<ConsultationDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/consultations/by/service/${serviceId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ConsultationDto>>;
      })
    );
  }
  /**
   * @param serviceId undefined
   * @return successful operation
   */
  findAllByService(serviceId: number): __Observable<Array<ConsultationDto>> {
    return this.findAllByServiceResponse(serviceId).pipe(
      __map(_r => _r.body as Array<ConsultationDto>)
    );
  }

  /**
   * @param params The `ConsultationService.ChangeConsultationStatusParams` containing the following parameters:
   *
   * - `status`:
   *
   * - `consultationId`:
   *
   * - `appointmentId`:
   *
   * @return successful operation
   */
  changeConsultationStatusResponse(params: ConsultationService.ChangeConsultationStatusParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.status != null) __params = __params.set('status', params.status.toString());
    if (params.consultationId != null) __params = __params.set('consultationId', params.consultationId.toString());
    if (params.appointmentId != null) __params = __params.set('appointmentId', params.appointmentId.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/v1/consultations/update/status`,
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
   * @param params The `ConsultationService.ChangeConsultationStatusParams` containing the following parameters:
   *
   * - `status`:
   *
   * - `consultationId`:
   *
   * - `appointmentId`:
   *
   * @return successful operation
   */
  changeConsultationStatus(params: ConsultationService.ChangeConsultationStatusParams): __Observable<number> {
    return this.changeConsultationStatusResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param consultationId undefined
   * @return successful operation
   */
  findByIdResponse(consultationId: number): __Observable<__StrictHttpResponse<ConsultationDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/consultations/${consultationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ConsultationDto>;
      })
    );
  }
  /**
   * @param consultationId undefined
   * @return successful operation
   */
  findById(consultationId: number): __Observable<ConsultationDto> {
    return this.findByIdResponse(consultationId).pipe(
      __map(_r => _r.body as ConsultationDto)
    );
  }

  /**
   * @param consultationId undefined
   */
  deleteResponse(consultationId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/consultations/${consultationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param consultationId undefined
   */
  delete(consultationId: number): __Observable<null> {
    return this.deleteResponse(consultationId).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ConsultationService {

  /**
   * Parameters for changeConsultationStatus
   */
  export interface ChangeConsultationStatusParams {
    status: 'STAND_BY' | 'OPEN' | 'IN_PROGRESS' | 'CLOSED';
    consultationId?: number;
    appointmentId?: number;
  }
}

export { ConsultationService }
