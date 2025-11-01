import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientService} from '../../../services/services/patient.service';
import {LightPatientDto} from '../../../services/models/light-patient-dto';

@Component({
  selector: 'app-patient-file',
  templateUrl: './patient-file.component.html',
  styleUrls: ['./patient-file.component.scss']
})
export class PatientFileComponent implements OnInit {

  patientId: number = -1;
  patient: LightPatientDto | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.patientId = this.activatedRoute.snapshot.params['patientId'];
    this.patientService.findLightPatientById(this.patientId)
    .subscribe(patient => {
      this.patient = patient;
    });
  }

}
