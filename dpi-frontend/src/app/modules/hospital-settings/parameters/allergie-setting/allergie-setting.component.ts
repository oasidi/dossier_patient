import {Component, Input, OnInit} from '@angular/core';
import {AllergyTypeDto} from '../../../../services/models/allergy-type-dto';
import {AllergyTypesService} from '../../../../services/services/allergy-types.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-allergie-setting',
  templateUrl: './allergie-setting.component.html',
  styleUrls: ['./allergie-setting.component.scss']
})
export class AllergieSettingComponent implements OnInit {

  @Input()
  allergyTypes: Array<AllergyTypeDto>;
  editMode = false;
  selectedAllergyType: AllergyTypeDto = {};

  constructor(
    private allergyTypeService: AllergyTypesService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
  }

  newEntry() {
    this.editMode = true;
    this.selectedAllergyType = {};
  }

  edit(allergy: AllergyTypeDto) {
    this.selectedAllergyType = allergy;
    this.editMode = true;
  }

  delete(id: number) {
    this.allergyTypeService.delete(id)
    .subscribe(() => {
      this.refreshData();
      this.messageService.add({
        severity: 'success',
        detail: 'Élément supprimé avec succès'
      });
    });
  }

  onSelect(event: any) {

  }

  cancel() {
    this.editMode = false;
  }

  save() {
    if (this.valid()) {
      this.allergyTypeService.save(this.selectedAllergyType).subscribe(
        () => {
          this.refreshData();
          this.editMode = false;
          this.selectedAllergyType = {};
        }
      );
    }
  }

  private refreshData() {
    this.allergyTypeService.findAll()
    .subscribe(data => {
      this.allergyTypes = data;
    });
  }

  private valid() {
    let valid = true;
    if (!this.selectedAllergyType.allergyName) {
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
