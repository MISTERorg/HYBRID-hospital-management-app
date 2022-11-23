import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaultService, VaultServiceState } from '../../shared/vault.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {
  public state: VaultServiceState;
  constructor(    private vaultService: VaultService,public router: Router) {
    this.state = vaultService.state;
   }

  ngOnInit() {
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

charts(){
  this.router.navigate(['chart']);
}
settings(){
  this.router.navigate(['biometrics']);
}
}
