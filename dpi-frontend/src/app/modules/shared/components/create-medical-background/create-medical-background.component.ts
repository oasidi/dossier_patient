import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MedicalBackgroundDto} from '../../../../services/models/medical-background-dto';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {MedicalBackgroundTypeDto} from '../../../../services/models/medical-background-type-dto';
import {MedicalBackgroundTypesService} from '../../../../services/services/medical-background-types.service';

@Component({
  selector: 'app-create-medical-background',
  templateUrl: './create-medical-background.component.html',
  styleUrls: ['./create-medical-background.component.scss']
})
export class CreateMedicalBackgroundComponent implements OnInit {

  @Output()
  save: EventEmitter<MedicalBackgroundDto> = new EventEmitter<MedicalBackgroundDto>();
  medicalBackgroundTypes: Array<MedicalBackgroundTypeDto> = [];
  medicalBackground: MedicalBackgroundDto = {
    patientId: -1,
    medicalBackgroundTypeId: -1
  };
  selectedMedicalBackgroundType: MedicalBackgroundTypeDto;
  errorKeys: Array<string> = [];
  errorMessages: { [key: string]: string } = {
    'medicalBackgroundTypeId': 'Il faut sélectionner un antécédent',
    'background': 'Il faut saisir le motif',
  };

  constructor(
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    private medicalBackgroundTypeService: MedicalBackgroundTypesService
  ) {
  }

  ngOnInit(): void {
    if (this.dialogConfig && this.dialogConfig.data && this.dialogConfig.data.background) {
      this.medicalBackground = this.dialogConfig.data.background;
      this.selectedMedicalBackgroundType = {
        id: this.medicalBackground.medicalBackgroundTypeId,
        backgroundName: this.medicalBackground.medicalBackgroundTypeLabel
      }
    }
    this.findAllMedicalBackgroundTypes();
  }

  onCancel() {
    this.save.emit(null);
    this.dialogRef.close(null);
  }

  onSave() {
    if (this.isNotValid()) {
      return;
    }
    this.medicalBackground.medicalBackgroundTypeId = this.selectedMedicalBackgroundType.id;
    this.medicalBackground.medicalBackgroundTypeLabel = this.selectedMedicalBackgroundType.backgroundName;
    this.save.emit(this.medicalBackground);
    this.dialogRef.close(this.medicalBackground);

    // reinitialize
    this.medicalBackground = {
      patientId: -1,
      medicalBackgroundTypeId: -1
    };
    this.selectedMedicalBackgroundType = undefined;
  }

  private findAllMedicalBackgroundTypes() {
    this.medicalBackgroundTypeService.findAll()
    .subscribe(data => {
      this.medicalBackgroundTypes = data;
    });
  }

  private isNotValid(): boolean {
    this.errorKeys = [];
    if (!this.medicalBackground.background) {
      this.errorKeys.push('background');
    }
    if (!this.selectedMedicalBackgroundType) {
      this.errorKeys.push('medicalBackgroundTypeId');
    }
    return this.errorKeys.length > 0;
  }
}
