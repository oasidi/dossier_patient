import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MedicalCaseDto} from '../../../../services/models/medical-case-dto';
import {MedicalCasesService} from '../../../../services/services/medical-cases.service';
import {CreateMedicalCaseComponent} from '../../../shared/components/create-medical-case/create-medical-case.component';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  medicalCases: Array<MedicalCaseDto> = [];
  selectedMedicalCase: MedicalCaseDto = undefined;
  @Input()
  patientId;
  private dialogRef: DynamicDialogRef;
  @Output()
  private medicalCaseSelected: EventEmitter<MedicalCaseDto> = new EventEmitter<MedicalCaseDto>();

  constructor(
    private medicalCaseService: MedicalCasesService,
    private dialogService: DialogService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.findPatientMedicalCases();
  }

  newMedicalCase() {
    this.dialogRef = this.dialogService.open(CreateMedicalCaseComponent, {
      header: 'Nouveau cas medical',
      width: '50%'
    });
    this.onDialogClose();
  }

  private findPatientMedicalCases() {
    this.medicalCaseService.findAllByPatient(this.patientId)
    .subscribe({
      next: data => {
        this.medicalCases = data;
      }
    })
  }

  private onDialogClose() {
    this.dialogRef.onClose.subscribe((medicalCase: MedicalCaseDto) => {
      if (medicalCase && medicalCase.medicalCaseTypeId !== -1) {
        this.saveNewMedicalCase(medicalCase);
      }
    });
  }

  private saveNewMedicalCase(medicalCase: MedicalCaseDto) {
    medicalCase.patientId = this.patientId;
    this.medicalCaseService.save(medicalCase)
    .subscribe((medicalCaseId) => {
      medicalCase.id = medicalCaseId;
      this.selectedMedicalCase = medicalCase;
      this.medicalCases.push(medicalCase);
      this.medicalCaseSelected.emit(this.selectedMedicalCase);
      this.messageService.add({
        severity: 'success',
        summary: 'Succès',
        detail: 'Enregistrement avec succès'
      });
    });
  }

  onChange() {
    this.medicalCaseSelected.emit(this.selectedMedicalCase);
  }
}
