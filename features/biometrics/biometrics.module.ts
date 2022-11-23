import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiometricsPageRoutingModule } from './biometrics-routing.module';

import { BiometricsPage } from './biometrics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiometricsPageRoutingModule
  ],
  declarations: [BiometricsPage]
})
export class BiometricsPageModule {}
