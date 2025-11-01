import { Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistantGuardService {

  constructor(
    private kcService: KeycloakService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.kcService.getUserRoles().includes('ROLE_ASSISTANT') || this.kcService.getUserRoles().includes('ROLE_DOCTOR')) {
      return true;
    }
    this.router.navigate(['/forbidden']);
  }
}
