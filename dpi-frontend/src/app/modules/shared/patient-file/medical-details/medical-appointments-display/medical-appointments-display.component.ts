import {Component, Input, OnInit} from '@angular/core';
import {AppointmentRepresentation} from '../../../../../services/models/appointment-representation';
import {DetailedPatientAppointment} from '../../../../../services/models/detailed-patient-appointment';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {CreateAppointmentComponent} from '../../../../appointment/create-appointment/create-appointment.component';
import {AppointmentService} from '../../../../../services/services/appointment.service';

@Component({
  selector: 'app-medical-appointments-display',
  templateUrl: './medical-appointments-display.component.html',
  styleUrls: ['./medical-appointments-display.component.scss']
})
export class MedicalAppointmentsDisplayComponent implements OnInit {
  @Input()
  patientId: number;
  medicalAppointmentsDates: Array<string> = [];
  selectedDate: string;
  patientAppointments: Array<DetailedPatientAppointment> = [];
  private dialogRef: DynamicDialogRef;

  constructor(
    private dialogService: DialogService,
    private appointmentService: AppointmentService
  ) { }

  private _medicalAppointments: Array<AppointmentRepresentation> = [];

  @Input()
  set medicalAppointments(value: Array<AppointmentRepresentation>) {
    this._medicalAppointments = value;
    this.medicalAppointmentsDates = this._medicalAppointments.map(el => el.bookingDate);
  }

  ngOnInit(): void {
  }

  onAppointmentDateSelect(date: any) {
    this.patientAppointments = this._medicalAppointments.find(ap => ap.bookingDate === date.data)?.appointmentDetails;
  }

  newAppointment() {
    this.dialogRef = this.dialogService.open(CreateAppointmentComponent, {
      width: '90%',
      height: '90%',
      data: {
        patientId: this.patientId
      }
    });
    this.dialogRef.onClose.subscribe(async (data: boolean) => {
      if (data) {
        this.appointmentService.findAllPatientAppointments(this.patientId)
        .subscribe({
          next: data => {
            this.medicalAppointments = data;
          }
        })
      }
    });
  }
}
