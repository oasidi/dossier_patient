/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BookingDto } from '../models/booking-dto';
import { DetailedPatientAppointment } from '../models/detailed-patient-appointment';
import { TimeSlotDto } from '../models/time-slot-dto';
import { CheckBookingPostDto } from '../models/check-booking-post-dto';
@Injectable({
  providedIn: 'root',
})
class BookingService extends __BaseService {
  static readonly findAllPath = '/api/v1/bookings/';
  static readonly savePath = '/api/v1/bookings/';
  static readonly getTodayServiceAppointmentsPath = '/api/v1/bookings/appointments';
  static readonly checkAppointmentPath = '/api/v1/bookings/check';
  static readonly findByDatePath = '/api/v1/bookings/{date}';
  static readonly availableSlotsPath = '/api/v1/bookings/{date}/slots';
  static readonly findByIdPath = '/api/v1/bookings/{id}';
  static readonly deletePath = '/api/v1/bookings/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<BookingDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/bookings/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BookingDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<BookingDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<BookingDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: BookingDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/bookings/`,
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
  save(body?: BookingDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @return successful operation
   */
  getTodayServiceAppointmentsResponse(): __Observable<__StrictHttpResponse<Array<DetailedPatientAppointment>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/bookings/appointments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DetailedPatientAppointment>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  getTodayServiceAppointments(): __Observable<Array<DetailedPatientAppointment>> {
    return this.getTodayServiceAppointmentsResponse().pipe(
      __map(_r => _r.body as Array<DetailedPatientAppointment>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  checkAppointmentResponse(body?: CheckBookingPostDto): __Observable<__StrictHttpResponse<Array<TimeSlotDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/bookings/check`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TimeSlotDto>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  checkAppointment(body?: CheckBookingPostDto): __Observable<Array<TimeSlotDto>> {
    return this.checkAppointmentResponse(body).pipe(
      __map(_r => _r.body as Array<TimeSlotDto>)
    );
  }

  /**
   * @param date undefined
   * @return successful operation
   */
  findByDateResponse(date: string): __Observable<__StrictHttpResponse<BookingDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/bookings/${date}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BookingDto>;
      })
    );
  }
  /**
   * @param date undefined
   * @return successful operation
   */
  findByDate(date: string): __Observable<BookingDto> {
    return this.findByDateResponse(date).pipe(
      __map(_r => _r.body as BookingDto)
    );
  }

  /**
   * @param date undefined
   * @return successful operation
   */
  availableSlotsResponse(date: string): __Observable<__StrictHttpResponse<Array<TimeSlotDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/bookings/${date}/slots`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TimeSlotDto>>;
      })
    );
  }
  /**
   * @param date undefined
   * @return successful operation
   */
  availableSlots(date: string): __Observable<Array<TimeSlotDto>> {
    return this.availableSlotsResponse(date).pipe(
      __map(_r => _r.body as Array<TimeSlotDto>)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<BookingDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/bookings/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BookingDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findById(id: number): __Observable<BookingDto> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as BookingDto)
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
      this.rootUrl + `/api/v1/bookings/${id}`,
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

module BookingService {
}

export { BookingService }
