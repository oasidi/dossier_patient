/* tslint:disable */
export interface AllergyDto {
  id?: number;
  allergy: string;
  remarks?: string;
  confidential?: boolean;
  allergyTypeId: number;
  allergyTypeLabel?: string;
  date?: number;
  patientId?: number;
}
