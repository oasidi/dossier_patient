/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AddressDto } from '../models/address-dto';
@Injectable({
  providedIn: 'root',
})
class AddressService extends __BaseService {
  static readonly savePath = '/api/v1/address/';
  static readonly findByPatientIdPath = '/api/v1/address/patient/{patientId}';
  static readonly findByIdPath = '/api/v1/address/{addressId}';
  static readonly deletePath = '/api/v1/address/{patientId}';

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
  saveResponse(body?: AddressDto): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/address/`,
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
  save(body?: AddressDto): __Observable<number> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param patientId undefined
   * @return successful operation
   */
  findByPatientIdResponse(patientId: number): __Observable<__StrictHttpResponse<AddressDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/address/patient/${patientId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AddressDto>;
      })
    );
  }
  /**
   * @param patientId undefined
   * @return successful operation
   */
  findByPatientId(patientId: number): __Observable<AddressDto> {
    return this.findByPatientIdResponse(patientId).pipe(
      __map(_r => _r.body as AddressDto)
    );
  }

  /**
   * @param addressId undefined
   * @return successful operation
   */
  findByIdResponse(addressId: number): __Observable<__StrictHttpResponse<AddressDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/address/${addressId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AddressDto>;
      })
    );
  }
  /**
   * @param addressId undefined
   * @return successful operation
   */
  findById(addressId: number): __Observable<AddressDto> {
    return this.findByIdResponse(addressId).pipe(
      __map(_r => _r.body as AddressDto)
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
      this.rootUrl + `/api/v1/address/${patientId}`,
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

module AddressService {
}

export { AddressService }
