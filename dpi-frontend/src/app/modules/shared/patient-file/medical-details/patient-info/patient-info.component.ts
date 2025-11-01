import {Component, Input, OnInit} from '@angular/core';
import {LightPatientDto} from '../../../../../services/models/light-patient-dto';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  @Input()
  patient: LightPatientDto | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  getFullname() {
    return this.patient?.firstName
      + ' ' +
      (this.patient?.middleName === null ? '' : this.patient?.middleName)
      + ' ' +
      this.patient?.lastname
  }
}
