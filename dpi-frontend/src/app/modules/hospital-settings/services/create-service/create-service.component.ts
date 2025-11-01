import { Component, OnInit } from '@angular/core';
import {MedicalServiceDto} from '../../../../services/models/medical-service-dto';
import {ActivatedRoute, Router} from '@angular/router';
import {MedicalServiceService} from '../../../../services/services/medical-service.service';
import {HospitalDto} from '../../../../services/models/hospital-dto';
import {HospitalService} from '../../../../services/services/hospital.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {
  medicalServiceDto: MedicalServiceDto = {};
  private hospitalDto: HospitalDto = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private medicalServiceService: MedicalServiceService,
    private hospitalService: HospitalService
  ) { }

  ngOnInit(): void {
    this.getHospitalInformation();
    const id = this.activatedRoute.snapshot.params.medicalServiceId;
    if (id) {
      this.findMedicalService(id);
    }
  }

  save() {
    this.medicalServiceDto.hospitalId = this.hospitalDto.id;
    this.medicalServiceService.save(this.medicalServiceDto)
    .subscribe({
      next: async () => {
        await this.router.navigate(['..'], {relativeTo: this.activatedRoute});
      }
    });
  }

  async cancel() {
    await this.router.navigate(['..'], {relativeTo: this.activatedRoute});
  }

  private findMedicalService(id: number) {
    this.medicalServiceService.findById(id)
    .subscribe({
      next: data => {
        this.medicalServiceDto = data;
      }
    });
  }

  private getHospitalInformation() {
    this.hospitalService.getHospitalInformation()
    .subscribe({
      next: data => {
        this.hospitalDto = data;
      }
    });
  }
}
