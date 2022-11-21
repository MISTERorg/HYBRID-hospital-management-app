import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';


@Component({
    template: `
      <ion-list>
        <ion-item (click)="map()">
          <ion-label>
            map
          </ion-label>
        </ion-item>
        <ion-item (click)="video()">
          <ion-label>
            video Conference
          </ion-label>
        </ion-item>
      </ion-list>
    `
  })
  export class PopoverPage {
    constructor(
      private router: Router,
      private popOverCtrl: PopoverController,
      private navController: NavController
    ) {}

    async map() {
      this.router.navigate(['map']);
    }

    async video() {
      this.router.navigate(['map']);

    }

}
