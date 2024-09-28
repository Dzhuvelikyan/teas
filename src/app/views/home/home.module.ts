import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {MainComponent} from "./main/main.component";
import {SharedModule} from "../../shared/shared.module";
import {PopupService} from "../../shared/services/popup.service";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  providers: [PopupService]
})
export class HomeModule { }
