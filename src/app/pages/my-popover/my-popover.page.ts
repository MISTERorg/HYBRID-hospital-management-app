import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
@Component({
  selector: 'app-my-popover',
  templateUrl: './my-popover.page.html',
  styleUrls: ['./my-popover.page.scss'],
})
export class MyPopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }
  dismiss(){
    this.popoverCtrl.dismiss();
  }


}
