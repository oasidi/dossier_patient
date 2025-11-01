import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistantRoutingModule } from './assistant-routing.module';
import {SharedModule} from '../shared/shared.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {CardModule} from 'primeng/card';
import {MegaMenuModule} from 'primeng/megamenu';


@NgModule({
  declarations: [

    MainMenuComponent
  ],
    imports: [
        CommonModule,
        AssistantRoutingModule,
        SharedModule,
        CardModule,
        MegaMenuModule
    ]
})
export class AssistantModule { }
