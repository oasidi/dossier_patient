import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {MedicalCaseTypeDto} from '../../../../services/models/medical-case-type-dto';
import {MedicalCasesTypesService} from '../../../../services/services/medical-cases-types.service';

@Component({
  selector: 'app-medical-case-setting',
  templateUrl: './medical-case-setting.component.html',
  styleUrls: ['./medical-case-setting.component.scss']
})
export class MedicalCaseSettingComponent implements OnInit {

  @Input()
  medicalCases: Array<MedicalCaseTypeDto>;
  selectedMedicalCase: MedicalCaseTypeDto = {};
  editMode = false;

  constructor(
    private medicalCaseService: MedicalCasesTypesService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  newEntry() {
    this.editMode = true;
  }

  onSelect(event: any) {
  }

  save() {
    if (this.valid()) {
      this.medicalCaseService.save(this.selectedMedicalCase).subscribe(
        () => {
          this.refreshData();
          this.editMode = false;
          this.selectedMedicalCase = {};
        }
      );
    }
  }

  cancel() {
    this.editMode = false;
    this.selectedMedicalCase = {};
  }

  edit(constant: MedicalCaseTypeDto) {
    this.selectedMedicalCase = constant;
    this.editMode = true;
  }

  delete(id: number) {
    this.medicalCaseService.delete(id)
    .subscribe(() => {
      this.refreshData();
      this.messageService.add({
        severity: 'success',
        detail: 'Élément supprimé avec succès'
      });
    });
  }

  private refreshData() {
    this.medicalCaseService.findAll()
    .subscribe(data => {
      this.medicalCases = data;
    });
  }

  private valid() {
    let valid = true;
    if (!this.selectedMedicalCase.title) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez saisir le nom'
      });
      valid = false;
    }
    if (!this.selectedMedicalCase.description) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez saisir la description'
      });
      valid = false;
    }
    return valid;
  }

}
