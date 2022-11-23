import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
import { Contact } from '../models/contact';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage {
  public contacts: Observable<Contact[]>;

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.contacts = this.dataService.getContacts();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalPage,
      swipeToClose: true,

    });
     await modal.present();
  }
}
