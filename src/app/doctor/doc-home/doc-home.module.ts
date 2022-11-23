import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocHomePageRoutingModule } from './doc-home-routing.module';

import { DocHomePage } from './doc-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocHomePageRoutingModule
  ],
  declarations: [DocHomePage]
})
export class DocHomePageModule {}
