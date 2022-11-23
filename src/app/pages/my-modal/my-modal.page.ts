import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Contact, ContactCategory } from '../models/contact';
import { DataService } from '../services/data.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private dataService: DataService,
    private loadingController: LoadingController,
    private alertContoller: AlertController,
  ) { }


  ngOnInit(){

  }
  dismissModal(){
    this.modalController.dismiss()
  }


  createContact(firstName:string,lastName:string,email:string,phone:string,category:ContactCategory) {
    

    let user: User 

    let newContact: Contact = {
      id: user.uid,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      category: category,

    };
    // copy all the form values into the new contact
    this.loader();
    
      this.dataService.createContact(newContact).then((res) => {
        // Do something here
        this.dismissModal();
      }).catch((error) => {
        this.loader();
        this.showAlert(error.message,'check of it and try again');      });
   

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
