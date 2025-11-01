/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AppointmentDto } from '../models/appointment-dto';
import { AppointmentRepresentation } from '../models/appointment-representation';
@Injectable({
  providedIn: 'root',
})
class AppointmentService extends __BaseService {
  static readonly findAllPath = '/api/v1/appointments/';
  static readonly createPath = '/api/v1/appointments/';
  static readonly updatePath = '/api/v1/appointments/';
  static readonly findAllPatientAppointmentsPath = '/api/v1/appointments/patient/{patientId}';
  static readonly findByIdPath = '/api/v1/appointments/{id}';
  static readonly deletePath = '/api/v1/appointments/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<AppointmentDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/appointments/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AppointmentDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<AppointmentDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<AppointmentDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  createResponse(body?: AppointmentDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/appointments/`,
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
  create(body?: AppointmentDto): __Observable<number> {
    return this.createResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  updateResponse(body?: AppointmentDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/appointments/`,
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
  update(body?: AppointmentDto): __Observable<number> {
    return this.updateResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllPatientAppointmentsResponse(patientId: number): __Observable<__StrictHttpResponse<Array<AppointmentRepresentation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/appointments/patient/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AppointmentRepresentation>>;
      })
    );
  }
  /**
   * @param patientId undefined
   * @return successful operation
   */
  findAllPatientAppointments(patientId: number): __Observable<Array<AppointmentRepresentation>> {
    return this.findAllPatientAppointmentsResponse(patientId).pipe(
      __map(_r => _r.body as Array<AppointmentRepresentation>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<AppointmentDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/appointments/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppointmentDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findById(id: number): __Observable<AppointmentDto> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as AppointmentDto)
    );
  }

  /**
   * @param id undefined
   */
  deleteResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/appointments/${id}`,
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
   * @param id undefined
   */
  delete(id: number): __Observable<null> {
    return this.deleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AppointmentService {
}

export { AppointmentService }
