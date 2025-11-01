import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConsultationRoutingModule} from './consultation-routing.module';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {CardModule} from 'primeng/card';
import {MegaMenuModule} from 'primeng/megamenu';
import {SharedModule} from '../shared/shared.module';
import {ListAppointmentsComponent} from './pages/list-appointments/list-appointments.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConsultationDetailsComponent} from './pages/consultation-details/consultation-details.component';
import {DividerModule} from 'primeng/divider';
import {TabViewModule} from 'primeng/tabview';
import {ConsultationInformationComponent} from './components/consultation-information/consultation-information.component';
import {PharmacyPrescriptionComponent} from './components/pharmacy-prescription/pharmacy-prescription.component';
import {LaboratoryPrescriptionComponent} from './components/laboratory-prescription/laboratory-prescription.component';
import {ImageryPrescriptionComponent} from './components/imagery-prescription/imagery-prescription.component';
import {AccordionModule} from 'primeng/accordion';
import {EditorModule} from 'primeng/editor';
import {FormsModule} from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    MainMenuComponent,
    ListAppointmentsComponent,
    ConsultationDetailsComponent,
    ConsultationInformationComponent,
    PharmacyPrescriptionComponent,
    LaboratoryPrescriptionComponent,
    ImageryPrescriptionComponent
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule,
    CardModule,
    MegaMenuModule,
    SharedModule,
    TableModule,
    ButtonModule,
    DividerModule,
    TabViewModule,
    AccordionModule,
    EditorModule,
    FormsModule,
    RippleModule,
    AutoCompleteModule,
    InputNumberModule
  ]
})
export class ConsultationModule {
}
