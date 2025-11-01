import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {KeycloakService} from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuardService implements CanActivate{

  constructor(
    private kcService: KeycloakService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.kcService.getUserRoles().includes('ROLE_DOCTOR')) {
      return true;
    }
    // this.kcService.logout('http://localhost:4200/assistant/patients');
    this.router.navigate(['/forbidden']);
  }
}
