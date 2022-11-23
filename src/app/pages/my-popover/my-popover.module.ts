import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPopoverPageRoutingModule } from './my-popover-routing.module';

import { MyPopoverPage } from './my-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPopoverPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyPopoverPage]
})
export class MyPopoverPageModule {}
