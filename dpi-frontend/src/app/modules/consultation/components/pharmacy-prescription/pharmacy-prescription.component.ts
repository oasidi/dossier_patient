import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-prescription',
  templateUrl: './pharmacy-prescription.component.html',
  styleUrls: ['./pharmacy-prescription.component.scss']
})
export class PharmacyPrescriptionComponent implements OnInit {
  medicationPrescription: any;
  selectedPrescription: any;
  filteredMedication: any;
  selectedMedication: any;

  constructor() { }

  ngOnInit(): void {
  }

  onPrescriptionSelect(event: any) {

  }

  edit(prescription: any) {

  }

  delete(id) {

  }

  filter($event: any) {
    
  }
}
