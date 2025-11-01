import { Component, OnInit } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menuItems: MegaMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initMenuItems();
  }

  private initMenuItems(): void {
    this.menuItems = [
      {
        label: 'Informations générales',
        icon: 'fas fa-hospital',
        routerLink: 'general-information'
      },
      {
        label: 'Services',
        icon: 'fas fa-clinic-medical',
        routerLink: 'services'
      },
      {
        label: 'Paramétrage',
        icon: 'fas fa-cogs',
        routerLink: 'parameters'
      }
    ]
  }

}
