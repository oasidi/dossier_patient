import { Component, OnInit } from '@angular/core';
import {PatientSearchCriteria} from '../../../services/models/patient-search-criteria';
import {PatientService} from '../../../services/services/patient.service';
import {LightPatientDto} from '../../../services/models/light-patient-dto';
import {MessageService} from 'primeng/api';
import {StorageService} from '../services/storage/storage.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.scss']
})
export class SearchPatientComponent implements OnInit {

  searchCriteria: PatientSearchCriteria = {};
  patients: Array<LightPatientDto> = [];
  showSearchResult = false;

  date1: any;
  sexe = ['Homme', 'Femme'];

  constructor(
    private patientService: PatientService,
    private messageService: MessageService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.storageService.clear();
  }

  searchPatients() {
    this.showSearchResult = false;
    this.patientService.searchPatients(this.searchCriteria)
    .subscribe(result => {
      this.showSearchResult = true;
      this.patients = result;
      if (this.patients.length === 0) {
        this.messageService.add(
          {
            severity: 'warn',
            summary: 'Recherche',
            detail: 'Aucun patient n\'a été trouvé avec ces critères de recherches'
          }
        );
      }
    });
  }

  resetSearch() {
    this.searchCriteria = {};
    this.showSearchResult = false;
  }
}
