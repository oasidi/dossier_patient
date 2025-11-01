import {Component, Input, OnInit} from '@angular/core';
import {ConstantTypeDto} from '../../../../services/models/constant-type-dto';
import {ConstantsTypesService} from '../../../../services/services/constants-types.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-constants-setting',
  templateUrl: './constants-setting.component.html',
  styleUrls: ['./constants-setting.component.scss']
})
export class ConstantsSettingComponent implements OnInit {
  @Input()
  constants: Array<ConstantTypeDto>;
  selectedConstant: ConstantTypeDto = {};
  editMode = false;

  constructor(
    private constantsService: ConstantsTypesService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  newEntry() {
    this.editMode = true;
  }

  onConstantSelect(event: any) {

  }

  save() {
    if (this.valid()) {
      this.constantsService.save(this.selectedConstant).subscribe(
        () => {
          this.refreshData();
          this.editMode = false;
          this.selectedConstant = {};
        }
      );
    }
  }

  cancel() {
    this.editMode = false;
    this.selectedConstant = {};
  }

  edit(constant: ConstantTypeDto) {
    this.selectedConstant = constant;
    this.editMode = true;
  }

  delete(id: number) {
    this.constantsService.delete(id)
    .subscribe(() => {
      this.refreshData();
      this.messageService.add({
        severity: 'success',
        detail: 'Élément supprimé avec succès'
      });
    });
  }

  private refreshData() {
    this.constantsService.findAll()
    .subscribe(data => {
      this.constants = data;
    });
  }

  private valid() {
    let valid = true;
    if (!this.selectedConstant.constantName) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez saisir le nom'
      });
      valid = false;
    }
    if (!this.selectedConstant.constantUnit) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez saisir l\'unité'
      });
      valid = false;
    }
    return valid;
  }
}
