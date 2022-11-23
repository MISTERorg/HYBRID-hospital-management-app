import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccHomePage } from './acc-home.page';

const routes: Routes = [
  {
    path: '',
    component: AccHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccHomePageRoutingModule {}
