/* tslint:disable */
export interface MedicalBackgroundDto {
  id?: number;
  background?: string;
  confidential?: boolean;
  period?: number;
  treatment?: string;
  remarks?: string;
  patientId: number;
  medicalBackgroundTypeId: number;
  medicalBackgroundTypeLabel?: string;
  date?: number;
}
