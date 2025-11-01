import {Component, OnInit} from '@angular/core';
import {ConstantsTypesService} from '../../../services/services/constants-types.service';
import {ConstantTypeDto} from '../../../services/models/constant-type-dto';
import {AllergyTypesService} from '../../../services/services/allergy-types.service';
import {MedicalBackgroundTypesService} from '../../../services/services/medical-background-types.service';
import {MedicalBackgroundTypeDto} from '../../../services/models/medical-background-type-dto';
import {AllergyTypeDto} from '../../../services/models/allergy-type-dto';
import {MedicalCasesTypesService} from '../../../services/services/medical-cases-types.service';
import {MedicalCaseTypeDto} from '../../../services/models/medical-case-type-dto';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  constantTypes: Array<ConstantTypeDto>;
  allergyTypes: Array<AllergyTypeDto>;
  medicalBackgroundTypes: Array<MedicalBackgroundTypeDto>;
  medicalCaseTypes: Array<MedicalCaseTypeDto>;
  constructor(
    private constantTypesService: ConstantsTypesService,
    private allergyTypesService: AllergyTypesService,
    private medicalBackgroundTypesService: MedicalBackgroundTypesService,
    private medicalCaseService: MedicalCasesTypesService,
  ) {
  }

  ngOnInit(): void {
    this.findAllConstantTypes();
  }

  tabChange(event: any) {
    switch (event.index) {
      case 0:
        this.findAllConstantTypes();
        break;
      case 1:
        this.findAllAllergyTypes();
        break;
      case 2:
        this.findAllMedicalBackgroundTypes();
        break;
      case 3:
        this.findAllMedicalCaseTypes();
        break;
    }
  }

  private findAllConstantTypes() {
    this.constantTypesService.findAll()
    .subscribe(
      data => {
        this.constantTypes = data;
      }
    );
  }

  private findAllAllergyTypes() {
    this.allergyTypesService.findAll()
    .subscribe(
      data => {
        this.allergyTypes = data;
      }
    );
  }

  private findAllMedicalBackgroundTypes() {
    this.medicalBackgroundTypesService.findAll()
    .subscribe(
      data => {
        this.medicalBackgroundTypes = data;
      }
    );
  }

  private findAllMedicalCaseTypes() {
    this.medicalCaseService.findAll()
    .subscribe(data => {
      this.medicalCaseTypes = data;
    });
  }
}
