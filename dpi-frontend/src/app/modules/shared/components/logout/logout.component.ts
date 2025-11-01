import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private keycloakService: KeycloakService
  ) { }

  ngOnInit(): void {
  }

  async logout() {
    await this.keycloakService.logout();
  }
}
