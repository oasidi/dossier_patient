/* tslint:disable */
export interface LightPatientDto {
  id?: number;
  nationalId: string;
  firstName: string;
  middleName?: string;
  lastname: string;
  birthdate: string;
  birthPlace?: string;
  sexe?: 'MALE' | 'FEMALE';
  phoneNumber: string;
  email?: string;
  maritalStatus?: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWER';
  bloodGroup?: string;
  rhesus?: string;
  dateOfDeath?: string;
  date?: number;
}
