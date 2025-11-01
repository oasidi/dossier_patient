import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {PatientService} from '../../../../services/services/patient.service';
import {StorageService} from '../../services/storage/storage.service';
import {LightPatientDto} from '../../../../services/models/light-patient-dto';

@Component({
  selector: 'app-civil-information',
  templateUrl: './civil-information.component.html',
  styleUrls: ['./civil-information.component.scss']
})
export class CivilInformationComponent implements OnInit {
  sexe = [
    {
      displayName: 'Homme',
      value: 'MALE'
    },
    {
      displayName: 'Femme',
      value: 'FEMALE'
    }
  ];
  errorKeys: Array<string> = [];
  errorMessages: { [key: string]: string } = {
    'nationalId': 'Il faut saisir le NNI',
    'firstname': 'Il faut saisir le prenom',
    'middlename': 'Il faut saisir le prenom du pere',
    'lastname': 'Il faut saisir le nom de famille',
    'birthdate': 'Il faut saisir la date de naissance',
    'birthPlace': 'Il faut saisir le lieu de naissance'
  };
  patient: LightPatientDto;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private patientService: PatientService,
    private storageService: StorageService
  ) {
  }

  ngOnInit(): void {
    this.patient = this.storageService.patient;
  }

  nextPage() {
    this.patientService.save(this.patient)
    .subscribe({
      next: async patientId => {
        this.patient.id = patientId
        this.storageService.patient = this.patient;
        await this.router.navigate(['assistant/patients/create/contact']);
      },
      error: error =>{
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
              detail: 'Il faut remplir tout les champs obligatoires'
            }
          );
        }
      }
    });
  }
}
