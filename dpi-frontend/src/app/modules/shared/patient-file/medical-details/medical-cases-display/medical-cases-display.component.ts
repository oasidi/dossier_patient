import {Component, Input, OnInit} from '@angular/core';
import {MedicalCaseDto} from '../../../../../services/models/medical-case-dto';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {CreateMedicalCaseComponent} from '../../../components/create-medical-case/create-medical-case.component';
import {MedicalCasesService} from '../../../../../services/services/medical-cases.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-medical-cases-display',
  templateUrl: './medical-cases-display.component.html',
  styleUrls: ['./medical-cases-display.component.scss']
})
export class MedicalCasesDisplayComponent implements OnInit {

  @Input()
  patientId: number;
  @Input()
  medicalCases: Array<MedicalCaseDto> = [];
  private dialogRef: DynamicDialogRef;

  constructor(
    private dialogService: DialogService,
    private medicalCaseService: MedicalCasesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
  }

  newMedicalCase() {
    this.dialogRef = this.dialogService.open(CreateMedicalCaseComponent, {
      header: 'Nouveau cas medical',
      width: '50%'
    });
    this.onDialogClose();
  }

  edit(medicalCase: MedicalCaseDto) {
    this.dialogRef = this.dialogService.open(CreateMedicalCaseComponent, {
      header: 'Modifier le cas',
      width: '50%',
      data: {
        medicalCase: medicalCase
      }
    });
    this.onDialogClose();
  }

  delete(id: number) {
    this.confirmationService.confirm({
      accept: () => {
        this.medicalCaseService.delete(id)
        .subscribe(() => {
          const index = this.medicalCases.findIndex(a => a.id === id);
          if (index !== -1) {
            this.medicalCases.splice(index, 1);
          }
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'L\'élément a été supprimé avec succès'
          });
        });
      }
    });
  }

  private save(medicalCase: MedicalCaseDto) {
    medicalCase.patientId = this.patientId;
    this.medicalCaseService.save(medicalCase)
    .subscribe(() => {
      this.medicalCaseService.findAllByPatient(this.patientId)
      .subscribe(data => {
        this.medicalCases = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Enregistrement avec succès'
        });
      });
    });
  }

  private onDialogClose() {
    this.dialogRef.onClose.subscribe((medicalCase: MedicalCaseDto) => {
      if (medicalCase && medicalCase.medicalCaseTypeId !== -1) {
        this.save(medicalCase);
      }
    });
  }
}
