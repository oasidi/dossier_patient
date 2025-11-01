import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AllergyTypeDto} from '../../../../services/models/allergy-type-dto';
import {AllergyDto} from '../../../../services/models/allergy-dto';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AllergyTypesService} from '../../../../services/services/allergy-types.service';

@Component({
  selector: 'app-create-allergy',
  templateUrl: './create-allergy.component.html',
  styleUrls: ['./create-allergy.component.scss']
})
export class CreateAllergyComponent implements OnInit {

  @Output()
  save: EventEmitter<AllergyDto> = new EventEmitter<AllergyDto>();
  allergyTypes: Array<AllergyTypeDto> = [];
  allergy: AllergyDto = {
    allergy: '',
    allergyTypeId: -1
  };
  selectedAllergyType: AllergyTypeDto;
  errorKeys: Array<string> = [];
  errorMessages: { [key: string]: string } = {
    'allergy': 'Il faut saisir le motif',
    'allergyTypeId': 'Il faut sélectionner une allergie',
  };

  constructor(
    private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    private allergyTypesService: AllergyTypesService
  ) {
  }

  ngOnInit(): void {
    if (this.dialogConfig && this.dialogConfig.data && this.dialogConfig.data.allergy) {
      this.allergy = this.dialogConfig.data.allergy;
      this.selectedAllergyType = {
        id: this.allergy.allergyTypeId,
        allergyName: this.allergy.allergyTypeLabel
      }
    }
    this.findAllergyTypes();
  }

  onCancel() {
    this.save.emit(null);
    this.dialogRef.close(null);
  }

  onSave() {
    if (this.isNotValid()) {
      return;
    }
    this.allergy.allergyTypeId = this.selectedAllergyType.id;
    this.allergy.allergyTypeLabel = this.selectedAllergyType.allergyName;
    this.save.emit(this.allergy);
    this.dialogRef.close(this.allergy);

    // reinitialize
    this.allergy = {
      allergy: '',
      allergyTypeId: -1
    };
    this.selectedAllergyType = undefined;
  }

  private findAllergyTypes() {
    this.allergyTypesService.findAll()
    .subscribe(data => {
      this.allergyTypes = data;
    });
  }

  private isNotValid(): boolean {
    this.errorKeys = [];
    if (!this.allergy.allergy) {
      this.errorKeys.push('allergy');
    }
    if (!this.selectedAllergyType) {
      this.errorKeys.push('allergyTypeId');
    }
    return this.errorKeys.length > 0;
  }
}
