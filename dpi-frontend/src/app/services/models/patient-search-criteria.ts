/* tslint:disable */
export interface PatientSearchCriteria {
  nationalId?: string;
  firstName?: string;
  middleName?: string;
  lastname?: string;
  phoneNumber?: string;
  birthdate?: string;
  email?: string;
  sexe?: 'MALE' | 'FEMALE';
}
