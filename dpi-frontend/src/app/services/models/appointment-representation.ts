/* tslint:disable */
import { DetailedPatientAppointment } from './detailed-patient-appointment';
export interface AppointmentRepresentation {
  bookingDate?: string;
  appointmentDetails?: Array<DetailedPatientAppointment>;
}
