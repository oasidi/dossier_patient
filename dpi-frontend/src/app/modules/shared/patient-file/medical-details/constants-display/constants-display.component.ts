import {Component, Input, OnInit} from '@angular/core';
import {ConstantDto} from '../../../../../services/models/constant-dto';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {CreateConstantComponent} from '../../../components/create-constant/create-constant.component';
import {ConstantsService} from '../../../../../services/services/constants.service';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-constants-display',
  templateUrl: './constants-display.component.html',
  styleUrls: ['./constants-display.component.scss']
})
export class ConstantsDisplayComponent implements OnInit {
  @Input()
  constants: Array<ConstantDto> = [];
  @Input()
  patientId: number;
  selectedConstant: any;
  constantsData: any;
  basicOptions: any;
  private dialogRef: DynamicDialogRef;

  constructor(
    private dialogService: DialogService,
    private constantsService: ConstantsService
  ) { }

  ngOnInit(): void {
    this.constantsData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726',
          tension: .4
        }
      ]
    };
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }

  onConstantSelect(event: any) {

  }

  newConstant() {
    this.dialogRef = this.dialogService.open(CreateConstantComponent, {
      header: 'Nouvelle prise',
      width: '70%',
      data: {
        patientId: this.patientId
      }
    });
    this.dialogRef.onClose.subscribe(async (data: Array<ConstantDto>) => {
      if (data && data.length) {
        for (const elem of data) {
          elem.patientId = this.patientId
          await lastValueFrom(this.constantsService.save(elem));
        }
        this.constantsService.findAllByPatient(this.patientId)
        .subscribe(data => {
          this.constants = data;
        });
      }
    });
  }
}
