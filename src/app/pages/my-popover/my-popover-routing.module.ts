import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPopoverPage } from './my-popover.page';

const routes: Routes = [
  {
    path: '',
    component: MyPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPopoverPageRoutingModule {}
