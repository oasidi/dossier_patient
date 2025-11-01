import {Component, Input, OnInit} from '@angular/core';
import {ConsultationDto} from '../../../../services/models/consultation-dto';
import {ConsultationService} from '../../../../services/services/consultation.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-consultation-information',
  templateUrl: './consultation-information.component.html',
  styleUrls: ['./consultation-information.component.scss']
})
export class ConsultationInformationComponent implements OnInit {
  get readOnly(): boolean {
    return this.consultation.status === 'CLOSED';
  }

  @Input()
  consultation: ConsultationDto = {};
  private appointmentId;


  constructor(
    private consultationService: ConsultationService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.appointmentId = this.activatedRoute.snapshot.params.appointmentId;
  }

  saveConsultationChanges() {
    this.consultation.appointmentId = this.appointmentId;
    this.consultationService.save(this.consultation)
    .subscribe(() => {
      this.consultation.status = 'IN_PROGRESS';
      this.messageService.add(
        {
          severity: 'success',
          summary: 'Succès',
          detail: 'Enregistrement avec succès'
        }
      );
    });
  }
}
