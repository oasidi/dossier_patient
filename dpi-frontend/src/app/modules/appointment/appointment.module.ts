import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppointmentRoutingModule} from './appointment-routing.module';
import {CreateAppointmentComponent} from './create-appointment/create-appointment.component';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { TimeSlotsComponent } from './components/time-slots/time-slots.component';
import {SharedModule} from '../shared/shared.module';
import { BookingComponent } from './components/booking/booking.component';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  declarations: [
    CreateAppointmentComponent,
    TimeSlotsComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    CardModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    SharedModule,
    RippleModule
  ]
})
export class AppointmentModule { }
