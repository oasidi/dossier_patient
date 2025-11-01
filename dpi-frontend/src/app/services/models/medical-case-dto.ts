/* tslint:disable */
export interface MedicalCaseDto {
  id?: number;
  description?: string;
  title?: string;
  comment?: string;
  status?: 'OPEN';
  medicalCaseTypeId?: number;
  medicalCaseTypeTitle?: string;
  medicalCaseTypeDescription?: string;
  patientId?: number;
  date?: number;
}
