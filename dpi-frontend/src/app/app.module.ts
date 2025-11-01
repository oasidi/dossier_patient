import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {ConfirmationService, MessageService} from 'primeng/api';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './modules/shared/shared.module';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {DatePipe} from '@angular/common';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {ApiModule} from './services/api.module';
import {environment} from '../environments/environment';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:9090/auth',
        realm: 'sysinfo-med',
        clientId: 'sysinfo-med-ui'
      },
      initOptions: {
        onLoad: 'check-sso',
        // silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    SharedModule,
    ConfirmDialogModule,
    KeycloakAngularModule,
    ApiModule.forRoot({
      rootUrl: environment.apiBasePath
    })
  ],
  providers: [
    MessageService,
    HttpClient,
    DialogService,
    DynamicDialogRef,
    ConfirmationService,
    DynamicDialogConfig,
    DatePipe,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
