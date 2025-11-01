import { Component, OnInit } from '@angular/core';
import {ConsultationDto} from '../../../../services/models/consultation-dto';
import {ConsultationService} from '../../../../services/services/consultation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-consultation-details',
  templateUrl: './consultation-details.component.html',
  styleUrls: ['./consultation-details.component.scss']
})
export class ConsultationDetailsComponent implements OnInit {

  consultation: ConsultationDto = {}
  private consultationId;
  private appointmentId;
  constructor(
    private consultationService: ConsultationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.consultationId = this.activatedRoute.snapshot.params.consultationId;
    this.appointmentId = this.activatedRoute.snapshot.params.appointmentId;
    this.findConsultation();
  }

  restoreConsultation() {
    this.consultationService.delete(this.consultationId)
    .subscribe(async () => {
      await this.router.navigate(['consultation/today']);
    });
  }

  closeConsultation() {
    this.confirmationService.confirm({
      message: 'Voulez vous vraiment clôturer cette consultation?',
      accept: () => {
        this.consultationService.changeConsultationStatus({
          consultationId: this.consultationId,
          status: 'CLOSED',
          appointmentId: this.appointmentId
        }).subscribe(() => {
          this.consultation.status = 'CLOSED';
          this.messageService.add(
            {
              severity: 'success',
              summary: 'Succès',
              detail: 'La consultation a été clôturé avec succès'
            }
          );
        });
      }
    });
  }

  private findConsultation() {
    if (this.consultationId) {
      this.consultationService.findById(this.activatedRoute.snapshot.params.consultationId)
      .subscribe(
        (data) => {
          this.consultation = data;
        }
      );
    }
  }
}
