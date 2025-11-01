import {Component, OnDestroy, OnInit} from '@angular/core';
import {DetailedPatientAppointment} from '../../../../services/models/detailed-patient-appointment';
import {BookingService} from '../../../../services/services/booking.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConsultationService} from '../../../../services/services/consultation.service';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.scss']
})
export class ListAppointmentsComponent implements OnInit, OnDestroy {
  appointments: Array<DetailedPatientAppointment> = [];
  selectedAppointment: any;
  private intervalId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private consultationService: ConsultationService
  ) { }

  ngOnInit(): void {
    this.getTodayAppointments();
    this.refreshTodaysAppointments();
  }

  onAppointmentSelect() {

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private refreshTodaysAppointments() {
    this.intervalId = setInterval(() => {
      this.getTodayAppointments();
    }, 3000)
  }

  private getTodayAppointments() {
    // todo get the service ID from the doctor
    this.bookingService.getTodayServiceAppointments()
    .subscribe({
      next: data => {
        this.appointments = data;
      }
    });
  }

  consultationDetails(appointmentId: number, patientId: number) {
    this.consultationService.changeConsultationStatus({
      consultationId: null,
      appointmentId,
      status: 'STAND_BY'
    }).subscribe(
      async (consultationId) => {
        await this.router.navigate(['consultation/details', consultationId, patientId, appointmentId]);
      }
    );
  }
}
