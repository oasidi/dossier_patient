import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {
  createPatientSteps: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createPatientSteps = [
      {
        label: 'Informations civiles',
        routerLink: 'civil-info'
      },
      {
        label: 'Contact',
        routerLink: 'contact'
      },
      {
        label: 'Adresse',
        routerLink: 'address'
      },
      {
        label: 'Informations medicales',
        routerLink: 'medical-info'
      },
      {
        label: 'Aperçu',
        routerLink: 'confirmation'
      },
    ]
  }

}
