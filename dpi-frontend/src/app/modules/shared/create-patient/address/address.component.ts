import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AddressDto} from '../../../../services/models/address-dto';
import {StorageService} from '../../services/storage/storage.service';
import {AddressService} from '../../../../services/services/address.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  address: AddressDto;
  errorKeys: Array<string> = [];
  errorMessages: { [key: string]: string } = {
    'street': 'Il faut saisir le cartier',
  };

  constructor(
    private router: Router,
    private storageService: StorageService,
    private addressService: AddressService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.address = this.storageService.address;
  }

  async nextPage() {
    if (this.storageService.patient && this.storageService.patient.id) {
      this.address.patientId = this.storageService.patient.id;
      this.addressService.save(this.address)
      .subscribe({
        next: async addressId => {
          this.address.id = addressId;
          this.storageService.address = this.address;
          await this.router.navigate(['assistant/patients/create/medical-info']);
        },
        error: error => {
          if (error) {
            const errors = JSON.parse(error.error);
            errors.validationErrors.forEach(ve => {
              const start = ve.indexOf('[') + 1;
              const end = ve.indexOf(']');
              this.errorKeys.push(ve.substring(start, end));
            });
            this.messageService.add(
              {
                severity: 'error',
                summary: 'Erreur de validation',
                detail: 'Il faut remplir tous les champs obligatoires'
              }
            );
          }
        }
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

  async prevPage() {
    await this.router.navigate(['assistant/patients/create/contact']);
  }
}
