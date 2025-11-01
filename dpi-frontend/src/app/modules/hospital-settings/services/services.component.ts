import {Component, OnInit} from '@angular/core';
import {MedicalServiceDto} from '../../../services/models/medical-service-dto';
import {ActivatedRoute, Router} from '@angular/router';
import {MedicalServiceService} from '../../../services/services/medical-service.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  medicalServices: Array<MedicalServiceDto> = [];
  selectedService: MedicalServiceDto;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private medicalServiceService: MedicalServiceService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.findAllServices();
  }

  async createService() {
    await this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

  async onServiceSelect() {
    await this.router.navigate([this.selectedService.id], {relativeTo: this.activatedRoute});
  }

  private findAllServices() {
    this.medicalServiceService.findAll()
    .subscribe({
      next: data => {
        this.medicalServices = data;
      }
    })
  }

  delete(id: number) {
    this.confirmationService.confirm({
      accept: () => {
        this.medicalServiceService.delete(id)
        .subscribe(() => {
          const index = this.medicalServices.findIndex(service => service.id === id);
          if (index !== -1) {
            this.medicalServices.splice(index, 1);
          }
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'L\'élément a été supprimé avec succès'
          });
        });
      }
    });
  }
}
