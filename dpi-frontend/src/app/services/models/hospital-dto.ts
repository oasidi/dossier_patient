/* tslint:disable */
import { GeoLocation } from './geo-location';
export interface HospitalDto {
  id?: number;
  name?: string;
  status?: 'PRIVATE' | 'PUBLIC';
  logo?: string;
  dashboardPhoto?: string;
  directorName?: string;
  locality?: string;
  phoneNumber?: string;
  webSiteUrl?: string;
  email?: string;
  location?: GeoLocation;
}
