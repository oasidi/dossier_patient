import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HospitalSettingsRoutingModule} from './hospital-settings-routing.module';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {HospitalSettingsComponent} from './hospital-settings/hospital-settings.component';
import {CardModule} from 'primeng/card';
import {MegaMenuModule} from 'primeng/megamenu';
import {ServicesComponent} from './services/services.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';
import {DividerModule} from 'primeng/divider';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';
import {CreateServiceComponent} from './services/create-service/create-service.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import { ParametersComponent } from './parameters/parameters.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { ConstantsSettingComponent } from './parameters/constants/constants-setting.component';
import {TabViewModule} from 'primeng/tabview';
import { AllergieSettingComponent } from './parameters/allergie-setting/allergie-setting.component';
import { MedicalBackgroundSettingComponent } from './parameters/medical-background-setting/medical-background-setting.component';
import { MedicalCaseSettingComponent } from './parameters/medical-case-setting/medical-case-setting.component';


@NgModule({
  declarations: [
    MainMenuComponent,
    HospitalSettingsComponent,
    ServicesComponent,
    CreateServiceComponent,
    ParametersComponent,
    ConstantsSettingComponent,
    AllergieSettingComponent,
    MedicalBackgroundSettingComponent,
    MedicalCaseSettingComponent
  ],
    imports: [
        FormsModule,
        CommonModule,
        HospitalSettingsRoutingModule,
        CardModule,
        MegaMenuModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        ImageModule,
        DividerModule,
        TableModule,
        BadgeModule,
        InputSwitchModule,
        DropdownModule,
        TabMenuModule,
        TabViewModule
    ]
})
export class HospitalSettingsModule { }
