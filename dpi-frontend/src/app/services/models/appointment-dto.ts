/* tslint:disable */
import { LocalTime } from './local-time';
export interface AppointmentDto {
  id?: number;
  personnelId?: number;
  patientId?: number;
  consultationId?: number;
  medicalCaseId?: number;
  bookingId?: number;
  startTime?: LocalTime;
  endTime?: LocalTime;
}
