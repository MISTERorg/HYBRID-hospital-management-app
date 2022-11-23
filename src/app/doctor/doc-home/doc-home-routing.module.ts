import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocHomePage } from './doc-home.page';

const routes: Routes = [
  {
    path: '',
    component: DocHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocHomePageRoutingModule {}
