import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LightPatientDto} from '../../../../services/models/light-patient-dto';
import {AddressDto} from '../../../../services/models/address-dto';
import {ContactPersonDto} from '../../../../services/models/contact-person-dto';
import {ConstantDto} from '../../../../services/models/constant-dto';
import {AllergyDto} from '../../../../services/models/allergy-dto';
import {MedicalBackgroundDto} from '../../../../services/models/medical-background-dto';
import {StorageService} from '../../services/storage/storage.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  patient: LightPatientDto;
  contactPerson: ContactPersonDto;
  address: AddressDto;
  constants: Array<ConstantDto>;
  allergies: Array<AllergyDto>;
  medicalBackgrounds: Array<MedicalBackgroundDto>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.patient = this.storageService.patient
    this.contactPerson = this.storageService.contactPerson
    this.address = this.storageService.address
    this.constants = this.storageService.constants
    this.allergies = this.storageService.allergies
    this.medicalBackgrounds = this.storageService.medicalBackground
  }

  async prevPage() {
    await this.router.navigate(['assistant/patients/create/medical-info']);
  }

  async save() {
    if (this.storageService.patient && this.storageService.patient.id) {
      this.router.navigate(['../../' + this.storageService.patient.id + '/file'], {relativeTo: this.activatedRoute})
      .then(() => {
        this.storageService.clear();
      });
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
}
