import {Component, Input, OnInit} from '@angular/core';
import {ConstantDto} from '../../../../services/models/constant-dto';
import {AllergyDto} from '../../../../services/models/allergy-dto';
import {MedicalBackgroundDto} from '../../../../services/models/medical-background-dto';
import {ConstantsService} from '../../../../services/services/constants.service';
import {AllergiesService} from '../../../../services/services/allergies.service';
import {MedicalBackgroundsService} from '../../../../services/services/medical-backgrounds.service';
import {MedicalCasesService} from '../../../../services/services/medical-cases.service';
import {MedicalCaseDto} from '../../../../services/models/medical-case-dto';
import {AppointmentService} from '../../../../services/services/appointment.service';
import {AppointmentRepresentation} from '../../../../services/models/appointment-representation';

@Component({
  selector: 'app-medical-details',
  templateUrl: './medical-details.component.html',
  styleUrls: ['./medical-details.component.scss']
})
export class MedicalDetailsComponent implements OnInit {

  @Input()
  patientId: number | undefined;
  constants: Array<ConstantDto> = [];
  allergies: Array<AllergyDto> = [];
  medicalBackgrounds: Array<MedicalBackgroundDto> = [];
  medicalCases: Array<MedicalCaseDto>;
  medicalAppointments: Array<AppointmentRepresentation> = [];

  constructor(
    private constantsService: ConstantsService,
    private allergiesService: AllergiesService,
    private medicalBackgroundService: MedicalBackgroundsService,
    private medicalCasesService: MedicalCasesService,
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.findAllConstants();
  }

  tabChange(event: any) {
    if (this.patientId) {
      switch (event.index) {
        case 0:
          this.findAllConstants();
          break;
        case 1:
          this.findAllAllergies();
          break;
        case 2:
          this.findAllMedicalBackgrounds();
          break;
        case 3:
          this.findAllMedicalAppointments();
          break;
        case 4:
          this.findAllMedicalCases();
          break;
      }
    }
  }

  private findAllConstants() {
    this.constantsService.findAllByPatient(this.patientId as number)
    .subscribe(data => {
      this.constants = data;
    });
  }

  private findAllAllergies() {
    this.allergiesService.findAllByPatient(this.patientId as number)
    .subscribe(data => {
      this.allergies = data;
    });
  }

  private findAllMedicalBackgrounds() {
    this.medicalBackgroundService.findAllByPatientId(this.patientId as number)
    .subscribe(data => {
      this.medicalBackgrounds = data;
    });
  }

  private findAllMedicalCases() {
    this.medicalCasesService.findAllByPatient(this.patientId)
    .subscribe(data => {
      this.medicalCases = data;
    });
  }

  private findAllMedicalAppointments() {
    this.appointmentService.findAllPatientAppointments(this.patientId)
    .subscribe({
      next: data => {
        this.medicalAppointments = data;
      }
    })
  }
}
