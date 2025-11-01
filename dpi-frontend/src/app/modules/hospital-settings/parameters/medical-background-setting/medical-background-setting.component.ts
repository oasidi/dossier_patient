import {Component, Input, OnInit} from '@angular/core';
import {MedicalBackgroundTypeDto} from '../../../../services/models/medical-background-type-dto';
import {MedicalBackgroundTypesService} from '../../../../services/services/medical-background-types.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-medical-background-setting',
  templateUrl: './medical-background-setting.component.html',
  styleUrls: ['./medical-background-setting.component.scss']
})
export class MedicalBackgroundSettingComponent implements OnInit {

  @Input()
  medicalBackgroundTypes: Array<MedicalBackgroundTypeDto>;
  editMode = false;
  selectedMedicalBackgroundType: MedicalBackgroundTypeDto;

  constructor(
    private medicalBackgroundTypesService: MedicalBackgroundTypesService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.editMode = false;
  }

  save() {
    if (this.valid()) {
      this.medicalBackgroundTypesService.save(this.selectedMedicalBackgroundType).subscribe(
        () => {
          this.refreshData();
          this.editMode = false;
          this.selectedMedicalBackgroundType = {};
        }
      );
    }
  }

  newEntry() {
    this.editMode = true;
    this.selectedMedicalBackgroundType = {};
  }

  edit(medicalBackground: MedicalBackgroundTypeDto) {
    this.selectedMedicalBackgroundType = medicalBackground;
    this.editMode = true;
  }

  onSelect(event: any) {

  }

  delete(id: number) {
    this.medicalBackgroundTypesService.delete(id)
    .subscribe(() => {
      this.refreshData();
      this.messageService.add({
        severity: 'success',
        detail: 'Élément supprimé avec succès'
      });
    });
  }

  private refreshData() {
    this.medicalBackgroundTypesService.findAll()
    .subscribe(data => {
      this.medicalBackgroundTypes = data;
    });
  }

  private valid() {
    let valid = true;
    if (!this.selectedMedicalBackgroundType.backgroundName) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez saisir le nom'
      });
      valid = false;
    }
    return valid;
  }
}
