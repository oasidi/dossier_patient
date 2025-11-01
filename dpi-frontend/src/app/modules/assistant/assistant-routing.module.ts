import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchPatientComponent} from '../shared/search-patient/search-patient.component';
import {CreatePatientComponent} from '../shared/create-patient/create-patient.component';
import {CivilInformationComponent} from '../shared/create-patient/civil-information/civil-information.component';
import {ContactComponent} from '../shared/create-patient/contact/contact.component';
import {AddressComponent} from '../shared/create-patient/address/address.component';
import {MedicalInformationComponent} from '../shared/create-patient/medical-information/medical-information.component';
import {ConfirmationComponent} from '../shared/create-patient/confirmation/confirmation.component';
import {PatientFileComponent} from '../shared/patient-file/patient-file.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    children: [
      {
        path: 'patients',
        component: SearchPatientComponent
      },
      {
        path: 'patients/create',
        component: CreatePatientComponent,
        children: [
          {
            path: 'civil-info',
            component: CivilInformationComponent
          },
          {
            path: 'contact',
            component: ContactComponent
          },
          {
            path: 'address',
            component: AddressComponent
          },
          {
            path: 'medical-info',
            component: MedicalInformationComponent
          },
          {
            path: 'confirmation',
            component: ConfirmationComponent
          },
        ]
      },
      {
        path: 'patients/:patientId/file',
        component: PatientFileComponent
      },
      {
        path: 'appointments',
        loadChildren: () => {
          return import('../appointment/appointment.module')
          .then(
            (module) => module.AppointmentModule
          );
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistantRoutingModule {
}
