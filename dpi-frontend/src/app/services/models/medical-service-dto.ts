/* tslint:disable */
import { GeoLocation } from './geo-location';
export interface MedicalServiceDto {
  id?: number;
  name?: string;
  code?: string;
  description?: string;
  director?: string;
  logo?: string;
  billable?: boolean;
  location?: GeoLocation;
  phoneNumber?: string;
  canHospitalize?: boolean;
  active?: boolean;
  hospitalId?: number;
  date?: number;
}
