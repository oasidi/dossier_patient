import {Component, OnInit} from '@angular/core';
import {HospitalDto} from '../../../services/models/hospital-dto';
import {MessageService} from 'primeng/api';
import {HospitalService} from '../../../services/services/hospital.service';

@Component({
  selector: 'app-hospital-settings',
  templateUrl: './hospital-settings.component.html',
  styleUrls: ['./hospital-settings.component.scss']
})
export class HospitalSettingsComponent implements OnInit {
  readOnly = true;
  hospitalDto: HospitalDto = {};
  private lastSavedHospitalDto: HospitalDto = {};

  constructor(
    private hospitalService: HospitalService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getHospitalInformation();
  }

  saveChanges() {
    this.hospitalService.save(this.hospitalDto)
    .subscribe({
      next: hospitalId => {
        this.hospitalDto.id = hospitalId;
        this.lastSavedHospitalDto = {...this.hospitalDto};
        this.readOnly = true;
      }
      , error: () => {
        this.readOnly = false;
        this.messageService.add(
          {
            severity: 'error',
            summary: 'Erreur',
            detail: 'Une erreur est survenue lors de l\'enregistrement. Veuillez ressayer plus tard'
          }
        );
      }
    });
  }

  cancel() {
    this.readOnly = true;
    this.hospitalDto = this.lastSavedHospitalDto;
  }

  private getHospitalInformation() {
    this.hospitalService.getHospitalInformation()
    .subscribe({
      next: data => {
        this.hospitalDto = data;
        this.lastSavedHospitalDto = data;
      },
      error: err => {
        if (err.status === 404) {
          this.readOnly = false;
          this.messageService.add(
            {
              severity: 'warn',
              summary: 'Attention',
              detail: 'Veuillez renseigner les information de l\'organisme'
            }
          );
        }
      }
    });
  }
}
