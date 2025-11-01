import {Component, Input, OnInit} from '@angular/core';
import {MedicalBackgroundDto} from '../../../../../services/models/medical-background-dto';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {CreateMedicalBackgroundComponent} from '../../../components/create-medical-background/create-medical-background.component';
import {MedicalBackgroundsService} from '../../../../../services/services/medical-backgrounds.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-medical-backgrounds-display',
  templateUrl: './medical-backgrounds-display.component.html',
  styleUrls: ['./medical-backgrounds-display.component.scss']
})
export class MedicalBackgroundsDisplayComponent implements OnInit {
  @Input()
  medicalBackgrounds: Array<MedicalBackgroundDto> = [];
  @Input()
  patientId: number;
  selectedMedicalBackground: any;

  constructor(
    private dialogRef: DynamicDialogRef,
    private dialogService: DialogService,
    private medicalBackgroundService: MedicalBackgroundsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
  }

  onMedicalBackgroundSelect(event: any) {

  }

  newMedicalBackground() {
    this.dialogRef = this.dialogService.open(CreateMedicalBackgroundComponent, {
      header: 'Nouvelle prise',
      width: '50%'
    });
    this.onDialogClose();
  }

  delete(id: number) {
    this.confirmationService.confirm({
      accept: () => {
        this.medicalBackgroundService.delete(id)
        .subscribe(() => {
          const index = this.medicalBackgrounds.findIndex(a => a.id === id);
          if (index !== -1) {
            this.medicalBackgrounds.splice(index, 1);
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

  edit(medicalBackground: MedicalBackgroundDto) {
    this.dialogRef = this.dialogService.open(CreateMedicalBackgroundComponent, {
      header: 'Nouvelle prise',
      width: '50%',
      data: {
        background: medicalBackground
      }
    });
    this.onDialogClose();
  }

  private onDialogClose() {
    this.dialogRef.onClose.subscribe((background: MedicalBackgroundDto) => {
      if (background && background.medicalBackgroundTypeId !== -1) {
        this.save(background);
      }
    });
  }

  private save(background: MedicalBackgroundDto) {
    background.patientId = this.patientId;
    this.medicalBackgroundService.save(background)
    .subscribe(() => {
      this.medicalBackgroundService.findAllByPatientId(this.patientId)
      .subscribe(data => {
        this.medicalBackgrounds = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Enregistrement avec succès'
        });
      });
    });
  }
}
