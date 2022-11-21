import { AppComponent } from './../../app.component';
import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade,EffectFlip, EffectCube,Lazy, EffectCards } from 'swiper';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { PopoverPage } from '../popoverpage/popoverpage';
import { PopoverController } from '@ionic/angular';


SwiperCore.use([EffectCards,Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade,EffectFlip,EffectCube,Lazy]);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardPage implements OnInit {
  constructor(    public router: Router,
    public popoverCtrl: PopoverController) {}

  ngOnInit() {}
  emergency(){

  }
  forum(){
    this.router.navigate(['loginchat']);

  }
  map(){
    this.router.navigate(['map']);

  }
  openLink() {
    this.router.navigate(['loginchat']);
    const openCapacitorSite = async()=>{
      await Browser.open({url: 'http:/apirtc.github.io/ApiRTC-angular/'});
    }
  }
  async openMenu(myEvent) {
    console.log('menu:', myEvent);
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event: myEvent
    });
    return await popover.present();
  }
}
