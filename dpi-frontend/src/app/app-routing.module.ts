import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from './modules/shared/components/logout/logout.component';
import {AuthGuardService} from './modules/shared/services/guard/auth-guard.service';
import {DoctorGuardService} from './modules/shared/services/guard/roles/doctor-guard.service';
import {AccessDeniedComponent} from './modules/shared/pages/access-denied/access-denied.component';
import {AssistantGuardService} from './modules/shared/services/guard/roles/assistant-guard.service';
import {NotFoundComponent} from './modules/shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'assistant',
    loadChildren: () => {
      return import('./modules/assistant/assistant.module')
      .then(
        (module) => module.AssistantModule
      );
    },
    canActivate: [AuthGuardService, AssistantGuardService]
  },
  {
    path: 'hospital',
    loadChildren: () => {
      return import('./modules/hospital-settings/hospital-settings.module')
      .then(
        (module) => module.HospitalSettingsModule
      );
    },
    canActivate: [AuthGuardService, DoctorGuardService]
  },
  {
    path: 'consultation',
    loadChildren: () => {
      return import('./modules/consultation/consultation.module')
      .then(
        (module) => module.ConsultationModule
      );
    },
    canActivate: [AuthGuardService, DoctorGuardService]
  },
  {
    path: 'forbidden',
    component: AccessDeniedComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
