import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication-service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})

export class PasswordResetPage implements OnInit {
  constructor(public authService: AuthenticationService,    private menu: MenuController,) {}

  ngOnInit() {
    this.menu.enable(false,'main-menu');
    this.menu.swipeGesture(false,'main-menu');
  }

}
