/* tslint:disable */
export interface ConsultationDto {
  id?: number;
  anamnesis?: string;
  physicalExamination?: string;
  complementaryExamination?: string;
  differentialDiagnosis?: string;
  proposition?: string;
  furtherConsultation?: string;
  appointmentId?: number;
  status?: 'STAND_BY' | 'OPEN' | 'IN_PROGRESS' | 'CLOSED';
}
