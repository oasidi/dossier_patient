import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LightPatientDto} from '../../../../services/models/light-patient-dto';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input()
  patients: Array<LightPatientDto> = [];
  selectedPatient: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async onPatientSelect(): Promise<void> {
    await this.router.navigate([this.selectedPatient.id + '/file'], {relativeTo: this.activatedRoute});
  }

  createPatient() {
    this.router.navigate(['create/civil-info'], {relativeTo: this.activatedRoute});
  }
}
