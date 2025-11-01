/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AddressService } from './services/address.service';
import { AllergiesService } from './services/allergies.service';
import { AllergyTypesService } from './services/allergy-types.service';
import { AppointmentService } from './services/appointment.service';
import { BookingService } from './services/booking.service';
import { ConstantsTypesService } from './services/constants-types.service';
import { ConstantsService } from './services/constants.service';
import { ConsultationService } from './services/consultation.service';
import { ContactPersonService } from './services/contact-person.service';
import { HospitalService } from './services/hospital.service';
import { MedicalBackgroundTypesService } from './services/medical-background-types.service';
import { MedicalBackgroundsService } from './services/medical-backgrounds.service';
import { MedicalCasesTypesService } from './services/medical-cases-types.service';
import { MedicalCasesService } from './services/medical-cases.service';
import { MedicalServiceService } from './services/medical-service.service';
import { MedicationService } from './services/medication.service';
import { PatientService } from './services/patient.service';
import { PreferencesCasesService } from './services/preferences-cases.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AddressService,
    AllergiesService,
    AllergyTypesService,
    AppointmentService,
    BookingService,
    ConstantsTypesService,
    ConstantsService,
    ConsultationService,
    ContactPersonService,
    HospitalService,
    MedicalBackgroundTypesService,
    MedicalBackgroundsService,
    MedicalCasesTypesService,
    MedicalCasesService,
    MedicalServiceService,
    MedicationService,
    PatientService,
    PreferencesCasesService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<any> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
