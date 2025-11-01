import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {HospitalSettingsComponent} from './hospital-settings/hospital-settings.component';
import {ServicesComponent} from './services/services.component';
import {CreateServiceComponent} from './services/create-service/create-service.component';
import {ParametersComponent} from './parameters/parameters.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    children: [
      {
        path: 'general-information',
        component: HospitalSettingsComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'services/new',
        component: CreateServiceComponent
      },
      {
        path: 'services/:medicalServiceId',
        component: CreateServiceComponent
      },
      {
        path: 'parameters',
        component: ParametersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalSettingsRoutingModule { }
