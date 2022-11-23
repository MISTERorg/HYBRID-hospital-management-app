import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//carousel slider
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade,EffectFlip, EffectCube,Lazy } from 'swiper';
// modal and popover
import { MenuController,ModalController, PopoverController } from '@ionic/angular';
import {MyModalPage} from '../my-modal/my-modal.page';
import {MyPopoverPage} from '../my-popover/my-popover.page'
// identity vault security
import { VaultService, VaultServiceState } from '../../shared/vault.service';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade,EffectFlip,EffectCube,Lazy]);

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class IndexPage  {
  //identity vault
  public state: VaultServiceState;
  // modal and pop over
  constructor(
    private menu: MenuController,
    private modalCtrl:ModalController,
    private popoverCtrl: PopoverController,
    private vaultService: VaultService,
    ) { 
      this.state = vaultService.state;
    }

  // modal and pop over

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  async openModal(){
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: 'small-modal'
    });

    await modal.present();
  }
  async openTransparentModal(){
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: 'transparent-modal'
    });

    await modal.present();
  }
  async openPopover(ev: any){
    const popover = await this.popoverCtrl.create({
      component: MyPopoverPage,
      event: ev,
      cssClass: 'custom-popover'
    });

    await popover.present();
  }

  //identity vault
  async setSession(data: string) {
    await this.vaultService.setSession(data);
  }

  async restoreSession() {
    await this.vaultService.restoreSession();
  }

  lockVault() {
    this.vaultService.lockVault();
  }

  unlockVault() {
    this.vaultService.unlockVault();
  }

  setLockType() {
    this.vaultService.setLockType();
  }

  setPrivacyScreen() {
    this.vaultService.setPrivacyScreen(this.state.privacyScreen);
  }

  clearVault() {
    this.vaultService.clearVault();
  }
}
