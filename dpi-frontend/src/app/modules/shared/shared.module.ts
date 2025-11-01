import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPatientComponent} from './search-patient/search-patient.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {RippleModule} from 'primeng/ripple';
import {SearchResultComponent} from './search-patient/search-result/search-result.component';
import {TableModule} from 'primeng/table';
import {CreatePatientComponent} from './create-patient/create-patient.component';
import {StepsModule} from 'primeng/steps';
import {CivilInformationComponent} from './create-patient/civil-information/civil-information.component';
import {ContactComponent} from './create-patient/contact/contact.component';
import {AddressComponent} from './create-patient/address/address.component';
import {MedicalInformationComponent} from './create-patient/medical-information/medical-information.component';
import {ConfirmationComponent} from './create-patient/confirmation/confirmation.component';
import {DividerModule} from 'primeng/divider';
import {TabViewModule} from 'primeng/tabview';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {BadgeModule} from 'primeng/badge';
import {PatientFileComponent} from './patient-file/patient-file.component';
import {MedicalDetailsComponent} from './patient-file/medical-details/medical-details.component';
import {ConstantsDisplayComponent} from './patient-file/medical-details/constants-display/constants-display.component';
import {AllergiesDisplayComponent} from './patient-file/medical-details/allergies-display/allergies-display.component';
import {MedicalBackgroundsDisplayComponent} from './patient-file/medical-details/medical-backgrounds-display/medical-backgrounds-display.component';
import {MedicalAppointmentsDisplayComponent} from './patient-file/medical-details/medical-appointments-display/medical-appointments-display.component';
import {MedicalCasesDisplayComponent} from './patient-file/medical-details/medical-cases-display/medical-cases-display.component';
import {PatientInfoComponent} from './patient-file/medical-details/patient-info/patient-info.component';
import {ImageModule} from 'primeng/image';
import {ChartModule} from 'primeng/chart';
import {LoaderComponent} from './components/loader/loader.component';
import {CreateAllergyComponent} from './components/create-allergy/create-allergy.component';
import {CreateConstantComponent} from './components/create-constant/create-constant.component';
import {CreateMedicalBackgroundComponent} from './components/create-medical-background/create-medical-background.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InplaceModule} from 'primeng/inplace';
import {CreateMedicalCaseComponent} from './components/create-medical-case/create-medical-case.component';
import {LogoutComponent} from './components/logout/logout.component';
import {HourPipe} from './services/hour-pipe/hour-pipe';
import {AccessDeniedComponent} from './pages/access-denied/access-denied.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    SearchPatientComponent,
    SearchResultComponent,
    CreatePatientComponent,
    CivilInformationComponent,
    ContactComponent,
    AddressComponent,
    MedicalInformationComponent,
    ConfirmationComponent,
    PatientFileComponent,
    MedicalDetailsComponent,
    ConstantsDisplayComponent,
    AllergiesDisplayComponent,
    MedicalBackgroundsDisplayComponent,
    MedicalAppointmentsDisplayComponent,
    MedicalCasesDisplayComponent,
    PatientInfoComponent,
    LoaderComponent,
    CreateAllergyComponent,
    CreateConstantComponent,
    CreateMedicalBackgroundComponent,
    CreateMedicalCaseComponent,
    LogoutComponent,
    HourPipe,
    AccessDeniedComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    DropdownModule,
    RippleModule,
    TableModule,
    StepsModule,
    DividerModule,
    TabViewModule,
    InputTextareaModule,
    InputSwitchModule,
    BadgeModule,
    ImageModule,
    ChartModule,
    ConfirmDialogModule,
    InplaceModule
  ],
    exports: [
        SearchPatientComponent,
        LoaderComponent,
        LogoutComponent,
        HourPipe,
        PatientFileComponent
    ],
})
export class SharedModule {
}
