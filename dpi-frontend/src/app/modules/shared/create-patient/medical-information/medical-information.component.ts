import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AllergyDto} from '../../../../services/models/allergy-dto';
import {MedicalBackgroundDto} from '../../../../services/models/medical-background-dto';
import {ConstantDto} from '../../../../services/models/constant-dto';
import {StorageService} from '../../services/storage/storage.service';
import {MessageService} from 'primeng/api';
import {AllergiesService} from '../../../../services/services/allergies.service';
import {ConstantsService} from '../../../../services/services/constants.service';
import {MedicalBackgroundsService} from '../../../../services/services/medical-backgrounds.service';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-medical-information',
  templateUrl: './medical-information.component.html',
  styleUrls: ['./medical-information.component.scss']
})
export class MedicalInformationComponent implements OnInit {

  allergies: Array<AllergyDto> = [];
  medicalBackgrounds: Array<MedicalBackgroundDto> = [];
  private constants: ConstantDto[];

  constructor(
    private router: Router,
    private storageService: StorageService,
    private messageService: MessageService,
    private allergiesService: AllergiesService,
    private constantsService: ConstantsService,
    private medicalBackgroundsService: MedicalBackgroundsService
  ) { }

  ngOnInit(): void {
    this.constants = this.storageService.constants;
    this.allergies = this.storageService.allergies;
    this.medicalBackgrounds = this.storageService.medicalBackground;
  }

  async prevPage() {
    await this.router.navigate(['assistant/patients/create/address']);
  }

  async nextPage() {
    if (this.storageService.patient && this.storageService.patient.id) {
      await this.saveConstants();
      await this.saveAllergies();
      await this.saveMedicalBackgrounds();
      await this.router.navigate(['assistant/patients/create/confirmation']);
    } else {
      this.messageService.add(
        {
          severity: 'warn',
          summary: 'Attention',
          detail: 'Il faut saisir les informations de base du patient'
        }
      );
      await this.router.navigate(['assistant/patients/create/civil-info']);
    }
  }

  private async saveMedicalBackgrounds() {
    if (this.medicalBackgrounds && this.medicalBackgrounds.length > 0) {
      for (let element of this.medicalBackgrounds) {
        const index = this.medicalBackgrounds.indexOf(element);
        element.patientId = this.storageService.patient.id;
        element.id = await lastValueFrom(this.medicalBackgroundsService.save(element));
        this.medicalBackgrounds[index] = element;
      }
      this.storageService.medicalBackground = this.medicalBackgrounds;
    }
  }

  private async saveAllergies() {
    if (this.allergies && this.allergies.length > 0) {
      for (let element of this.allergies) {
        const index = this.allergies.indexOf(element);
        element.patientId = this.storageService.patient.id;
        element.id = await lastValueFrom(this.allergiesService.save(element));
        this.allergies[index] = element;
      }
      this.storageService.allergies = this.allergies;
    }
  }

  private async saveConstants() {
    if (this.constants && this.constants.length > 0) {
      for (const element of this.constants) {
        const index = this.constants.indexOf(element);
        element.patientId = this.storageService.patient.id;
        element.id = await lastValueFrom(this.constantsService.save(element));
        this.constants[index] = element;
      }
      this.storageService.constants = this.constants;
    }
  }

  onAllergySave(allergyDto: AllergyDto) {
    if (allergyDto) {
      this.allergies.push(allergyDto);
    }
  }

  delete(allergy: AllergyDto) {
    const index = this.allergies.indexOf(allergy);
    if (index >= 0) {
      this.allergies.splice(index, 1);
    }
  }

  onMedicalBackgroundSave(medicalBackgroundDto: MedicalBackgroundDto) {
    if (medicalBackgroundDto) {
      this.medicalBackgrounds.push(medicalBackgroundDto);
    }
  }

  deleteMedicalBackground(medicalBackground: MedicalBackgroundDto) {
    const index = this.medicalBackgrounds.indexOf(medicalBackground);
    if (index >= 0) {
      this.medicalBackgrounds.splice(index, 1);
    }
  }

  onConstantsSave(constants: ConstantDto[]) {
    if (constants && constants.length > 0) {
      this.constants = constants;
    }
  }
}
