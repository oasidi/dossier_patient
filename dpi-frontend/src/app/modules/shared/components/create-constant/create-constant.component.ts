import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConstantDto} from '../../../../services/models/constant-dto';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {ConstantsTypesService} from '../../../../services/services/constants-types.service';

@Component({
  selector: 'app-create-constant',
  templateUrl: './create-constant.component.html',
  styleUrls: ['./create-constant.component.scss']
})
export class CreateConstantComponent implements OnInit {

  @Output()
  save: EventEmitter<ConstantDto[]> = new EventEmitter<ConstantDto[]>();
  constants: Array<ConstantDto> = [];

  constructor(
    private dialogRef: DynamicDialogRef,
    private constantsTypeService: ConstantsTypesService
  ) { }

  ngOnInit(): void {
    this.findAllTypes();
  }

  private findAllTypes() {
    this.constantsTypeService.findAll()
    .subscribe(data => {
      data.forEach(elem => {
        this.constants.push({
          constantTypeId: elem.id,
          constantTypeLabel: elem.constantName,
          constantTypeUnit: elem.constantUnit,
        });
      })
    });
  }

  onSave() {
    this.dialogRef.close(this.constants);
    this.save.emit(this.constants);
  }

  onCancel() {
    this.dialogRef.close(null);
    this.save.emit(null);
  }
}
