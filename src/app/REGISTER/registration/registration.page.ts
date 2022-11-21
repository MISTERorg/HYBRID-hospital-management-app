import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication-service';
import { AlertController, LoadingController,MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private loadingController: LoadingController,
    private alertContoller: AlertController,
    private menu: MenuController,
  ) {}

  ngOnInit() {
    this.menu.enable(false,'main-menu');
    this.menu.swipeGesture(false,'main-menu');
  }

  signUp(email, password,Cpassword) {

    if (password.value==Cpassword.value){
      this.loader();
      this.authService.RegisterUser(email.value, password.value).then((res) => {
        // Do something here
        this.authService.SendVerificationMail();
      }).catch((error) => {
        this.loader();
        this.showAlert(error.message,'check of it and try again');      });
    }
    else{
      this.loader();
      this.showAlert('password not matching','please verify It');

    }
  }
  
  async showAlert(header: string,message: string){
    const alert = await this.alertContoller.create({
      header,
      message,
      buttons:['ok'],
    });
    await alert.present();
  }
  async loader(){
    const loading = await this.loadingController.create();
    await loading.present();
    await loading.dismiss();
  }

}
