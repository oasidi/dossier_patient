/* tslint:disable */
import { LocalTime } from './local-time';
export interface TimeSlotDto {
  appointmentId?: number;
  patientId?: number;
  start?: LocalTime;
  end?: LocalTime;
  available?: boolean;
}
