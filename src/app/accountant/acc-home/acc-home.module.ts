import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccHomePageRoutingModule } from './acc-home-routing.module';

import { AccHomePage } from './acc-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccHomePageRoutingModule
  ],
  declarations: [AccHomePage]
})
export class AccHomePageModule {}
