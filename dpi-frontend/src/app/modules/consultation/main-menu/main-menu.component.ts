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
        label: 'Consultation',
        icon: 'fas fa-user-md',
        routerLink: 'today'
      },
      {
        label: 'Patients',
        icon: 'fas fa-hospital-user',
        routerLink: 'patients'
      },
      {
        label: 'Rendez-vous',
        icon: 'fas fa-calendar-alt',
        routerLink: 'appointments'
      },
    ]
  }

}
