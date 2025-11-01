import {Component, Input, OnInit} from '@angular/core';
import {AllergyDto} from '../../../../../services/models/allergy-dto';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {CreateAllergyComponent} from '../../../components/create-allergy/create-allergy.component';
import {AllergiesService} from '../../../../../services/services/allergies.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-allergies-display',
  templateUrl: './allergies-display.component.html',
  styleUrls: ['./allergies-display.component.scss']
})
export class AllergiesDisplayComponent implements OnInit {
  @Input()
  allergies: Array<AllergyDto> = [];
  @Input()
  patientId: number;
  selectedAllergy: any;

  constructor(
    private dialogRef: DynamicDialogRef,
    private dialogService: DialogService,
    private allergyService: AllergiesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
  }

  onAllergySelect(event: any) {
    console.log(event);
  }

  newAllergy() {
    this.dialogRef = this.dialogService.open(CreateAllergyComponent, {
      header: 'Nouvelle prise',
      width: '50%',
    });
    this.onDialogClose();
  }

  edit(allergy: AllergyDto) {
    this.dialogRef = this.dialogService.open(CreateAllergyComponent, {
      header: 'Modifier la prise',
      width: '50%',
      data: {
        allergy: allergy
      }
    });
    this.onDialogClose();
  }

  delete(id: number) {
    this.confirmationService.confirm({
      accept: () => {
        this.allergyService.delete(id)
        .subscribe(() => {
          const index = this.allergies.findIndex(a => a.id === id);
          if (index !== -1) {
            this.allergies.splice(index, 1);
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

  private save(allergy: AllergyDto) {
    allergy.patientId = this.patientId;
    this.allergyService.save(allergy)
    .subscribe(() => {
      this.allergyService.findAllByPatient(this.patientId)
      .subscribe(data => {
        this.allergies = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Enregistrement avec succès'
        });
      });
    });
  }

  private onDialogClose() {
    this.dialogRef.onClose.subscribe((allergy: AllergyDto) => {
      if (allergy && allergy.allergyTypeId !== -1) {
        this.save(allergy);
      }
    });
  }
}
