import {Component, OnInit} from '@angular/core';
import {LightPatientDto} from '../../../services/models/light-patient-dto';
import {PatientService} from '../../../services/services/patient.service';
import {MedicalServiceDto} from '../../../services/models/medical-service-dto';
import {MedicalServiceService} from '../../../services/services/medical-service.service';
import {CheckBookingPostDto} from '../../../services/models/check-booking-post-dto';
import {BookingService} from '../../../services/services/booking.service';
import {TimeSlotDto} from '../../../services/models/time-slot-dto';
import {MedicalCaseDto} from '../../../services/models/medical-case-dto';
import {AppointmentDto} from '../../../services/models/appointment-dto';
import {BookingDto} from '../../../services/models/booking-dto';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AppointmentService} from '../../../services/services/appointment.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent implements OnInit {
  patients: Array<LightPatientDto> = [];
  services: Array<MedicalServiceDto> = [];
  timeSlots: Array<TimeSlotDto> = [];
  minDate: Date = new Date();
  checkAppointmentDto: CheckBookingPostDto = {
    serviceId: null,
    patientId: null,
    date: null
  };
  selectedTimeSlot: TimeSlotDto;
  createMedicalCase = false;
  selectedMedicalCase: MedicalCaseDto;
  selectPatientDisabled = false;
  selectedPatient: LightPatientDto;
  private appointment: AppointmentDto = {};
  private booking: BookingDto = {};

  constructor(
    private patientService: PatientService,
    private medicalServiceService: MedicalServiceService,
    private bookingService: BookingService,
    private appointmentService: AppointmentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
  ) {
  }

  ngOnInit(): void {
    if (this.dialogConfig && this.dialogConfig.data && this.dialogConfig.data.patientId) {
      this.checkAppointmentDto.patientId = this.dialogConfig.data.patientId;
      this.selectPatientDisabled = true;
    }
    this.findAllPatients();
    this.findAllMedicalServices();
  }

  checkBooking() {
    if (this.checkAppointmentDto.date === undefined || this.checkAppointmentDto.date === null) {
      this.messageService.add(
        {
          severity: 'warn',
          summary: 'Attention',
          detail: 'Veuillez sélectionner la date du rendez-vous!'
        }
      );
      return;
    }
    this.bookingService.checkAppointment(this.checkAppointmentDto)
    .subscribe({
      next: data => {
        this.timeSlots = data;
      }
    })
  }

  onTimeSlotSelected(timeSlot: TimeSlotDto) {
    if (timeSlot) {
      this.selectedTimeSlot = timeSlot;
    }
  }

  continueBooking() {
    this.createMedicalCase = true;
  }

  reset() {
    this.createMedicalCase = false;
    this.timeSlots = [];
    this.selectedTimeSlot = null;
    this.selectedMedicalCase = null;
  }

  onMedicalCaseSelect(medicalCaseDto: MedicalCaseDto) {
    this.selectedMedicalCase = medicalCaseDto;
  }

  saveBooking() {
    this.booking = {
      bookingDate: this.checkAppointmentDto.date,
      serviceId: this.checkAppointmentDto.serviceId
    }
    this.bookingService.save(this.booking)
    .subscribe({
      next: bookingId => {
        this.appointment = {
          bookingId,
          patientId: this.checkAppointmentDto.patientId,
          startTime: this.selectedTimeSlot.start,
          endTime: this.selectedTimeSlot.end,
          medicalCaseId: this.selectedMedicalCase.id
        }
        this.appointmentService.create(this.appointment)
        .subscribe({
          next: () => {
            this.reset();
            this.dialogRef.close(true);
          }
        });
      }
    });
  }

  onDeleteTimeSlot(appointmentId: number) {
    if (appointmentId) {
      const slotToDelete = this.timeSlots.find(slot => slot.appointmentId === appointmentId);
      if (slotToDelete) {
        this.confirmationService.confirm({
          accept: () => {
            this.appointmentService.delete(appointmentId)
            .subscribe(() => {
              slotToDelete.appointmentId = undefined;
              slotToDelete.available = true;
              this.messageService.add({
                severity: 'success',
                summary: 'Succès',
                detail: 'Le rendez-vous a été supprimé avec succès'
              });
            });
          }
        });
      }
    }
  }

  private findAllPatients() {
    this.patientService.findAll()
    .subscribe({
      next: data => {
        this.patients = data;
        this.selectedPatient = this.patients.find(p => p.id === +this.checkAppointmentDto.patientId);
      }
    });
  }

  private findAllMedicalServices() {
    this.medicalServiceService.findAll()
    .subscribe({
      next: data => {
        this.services = data;
      }
    });
  }
}
