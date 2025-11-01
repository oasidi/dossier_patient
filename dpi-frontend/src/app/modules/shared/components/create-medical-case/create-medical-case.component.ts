import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MedicalCaseDto} from '../../../../services/models/medical-case-dto';
import {MedicalCaseTypeDto} from '../../../../services/models/medical-case-type-dto';
import {MedicalCasesTypesService} from '../../../../services/services/medical-cases-types.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-medical-case',
  templateUrl: './create-medical-case.component.html',
  styleUrls: ['./create-medical-case.component.scss']
})
export class CreateMedicalCaseComponent implements OnInit {

  medicalCase: MedicalCaseDto = {};
  selectedMedicalCaseType: MedicalCaseTypeDto;
  errorKeys: Array<string> = [];
  errorMessages: { [key: string]: string } = {
    'medicalCaseTypeId': 'Il faut sélectionner le type de cas',
  };
  medicalCaseTypes: Array<MedicalCaseTypeDto> = [];

  @Output()
  private save: EventEmitter<MedicalCaseDto> = new EventEmitter<MedicalCaseDto>();

  constructor(
    private medicalCaseTypesService: MedicalCasesTypesService,
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
  ) {
  }

  ngOnInit(): void {
    if (this.dialogConfig && this.dialogConfig.data && this.dialogConfig.data.medicalCase) {
      this.medicalCase = this.dialogConfig.data.medicalCase;
      this.selectedMedicalCaseType = {
        id: this.medicalCase.medicalCaseTypeId,
        title: this.medicalCase.medicalCaseTypeTitle
      }
    }
    this.findAllMedicalCaseTypes();
  }

  onCancel() {
    this.save.emit(null);
    this.dialogRef.close(null);
  }

  onSave() {
    if (this.isNotValid()) {
      return;
    }
    this.medicalCase.medicalCaseTypeId = this.selectedMedicalCaseType.id;
    this.medicalCase.medicalCaseTypeTitle = this.selectedMedicalCaseType.title;
    this.medicalCase.medicalCaseTypeDescription = this.selectedMedicalCaseType.description;
    this.save.emit(this.medicalCase);
    this.dialogRef.close(this.medicalCase);

    // reinitialize
    this.medicalCase = {}
    this.selectedMedicalCaseType = undefined;
  }

  private findAllMedicalCaseTypes() {
    this.medicalCaseTypesService.findAll()
    .subscribe({
      next: data => {
        this.medicalCaseTypes = data;
      }
    });
  }

  private isNotValid(): boolean {
    this.errorKeys = [];
    if (!this.selectedMedicalCaseType) {
      this.errorKeys.push('medicalCaseTypeId');
    }
    return this.errorKeys.length > 0;
  }
}
