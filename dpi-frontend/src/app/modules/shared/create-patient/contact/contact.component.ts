import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage/storage.service';
import {ContactPersonService} from '../../../../services/services/contact-person.service';
import {ContactPersonDto} from '../../../../services/models/contact-person-dto';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  contactPerson: ContactPersonDto;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private contactPersonService: ContactPersonService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.contactPerson = this.storageService.contactPerson;
  }

  async nextPage() {
    if (this.storageService.patient && this.storageService.patient.id) {
      if (this.isValid()) {
        this.contactPerson.patientId = this.storageService.patient.id;
        this.contactPersonService.save(this.contactPerson)
        .subscribe({
          next: async contactPersonId => {
            this.contactPerson.id = contactPersonId;
            this.storageService.contactPerson = this.contactPerson;
            await this.router.navigate(['assistant/patients/create/address']);
          }
        });
      } else {
        await this.router.navigate(['assistant/patients/create/address']);
      }
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
    await this.router.navigate(['assistant/patients/create/civil-info']);
  }

  private isValid(): boolean {
    return this.contactPerson.firstname?.length > 0
      && this.contactPerson.lastname?.length > 0
      && this.contactPerson.phoneNumber?.length > 0
  }
}
