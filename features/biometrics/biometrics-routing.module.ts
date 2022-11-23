import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiometricsPage } from './biometrics.page';

const routes: Routes = [
  {
    path: '',
    component: BiometricsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiometricsPageRoutingModule {}
