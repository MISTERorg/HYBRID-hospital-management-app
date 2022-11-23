import { Component, OnInit } from '@angular/core';
import { VaultService, VaultServiceState } from '../../shared/vault.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-biometrics',
  templateUrl: './biometrics.page.html',
  styleUrls: ['./biometrics.page.scss'],
})
export class BiometricsPage implements OnInit {

 

  ngOnInit() {
    this.menu.enable(false,'main-menu');
    this.menu.swipeGesture(false,'main-menu');
  }
  public state: VaultServiceState;
  constructor(private vaultService: VaultService,private menu: MenuController) {
    this.state = vaultService.state;
  }
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