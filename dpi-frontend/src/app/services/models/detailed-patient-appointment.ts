/* tslint:disable */
import { LocalTime } from './local-time';
export interface DetailedPatientAppointment {
  appointmentId?: number;
  medicalCaseTitle?: string;
  patientId?: number;
  patientFirstname?: string;
  patientLastname?: string;
  sexe?: 'MALE' | 'FEMALE';
  medicalServiceName?: string;
  startTime?: LocalTime;
  endTime?: LocalTime;
}
