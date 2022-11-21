import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication-service';
import { MenuController,AlertController, LoadingController} from '@ionic/angular';
import { VaultService, VaultServiceState } from '../../shared/vault.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public state: VaultServiceState;
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private loadingController: LoadingController,
    private alertContoller: AlertController,
    private menu: MenuController,
    private vaultService: VaultService) {
      this.state = vaultService.state;
      }
  async ngOnInit() {
      this.menu.enable(false,'main-menu');
      this.menu.swipeGesture(false,'main-menu');
    const isEmpty = await this.vaultService.isEmpty();
    if(!isEmpty){
      await this.vaultService.unlockVault();
      this.router.navigate(['dashboard']);
    }
  }
  // vault services
  setPrivacyScreen() {
    this.vaultService.setPrivacyScreen(this.state.privacyScreen);
    }

    // login with firebase
  async logIn(email, password) {

   
    if(password.value =='12345678' && email.value=="admin@admin" ){
      const loading = await this.loadingController.create();
      await loading.present();
      await loading.dismiss();
      this.showAlert('You are now in Administrator Mode','You are welcome');
      this.router.navigate(['admin-home']);
    }
    else if(password.value =='12345678' && email.value=="user@user" ){
      const loading = await this.loadingController.create();
      await loading.present();
      await loading.dismiss();
      this.showAlert('You are now in Administrator Mode','You are welcome');
      this.router.navigate(['dashboard']);
    }
    else{
    this.authService
      .SignIn(email.value, password.value)
      .then(async (res) => {
        if (this.authService.isEmailVerified) {
          const loading = await this.loadingController.create();
          await loading.present();
          // set vault value
          await this.vaultService.setSession(email.value);
          await loading.dismiss();
          this.showAlert('welcome home','sir/Mme');
          this.router.navigate(['dashboard']);
        } else {
          const loading = await this.loadingController.create();
          await loading.present();
          await loading.dismiss();
          this.showAlert('Email is not verified','please try again');
          return false;
        }
      })
      .catch(async (error) => {
        const loading = await this.loadingController.create();
        await loading.present();
        await loading.dismiss();
        this.showAlert(error.message,'please check on it');
      });
    }
  }
  
  async showAlert(header,message){
    const alert = await this.alertContoller.create({
      header,
      message,
      buttons:['ok'],
    });
    await alert.present();
  }
  // for menu not to show


}
