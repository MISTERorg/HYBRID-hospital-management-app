import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acc-home',
  templateUrl: './acc-home.page.html',
  styleUrls: ['./acc-home.page.scss'],
})
export class AccHomePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  bill(){
    this.router.navigate(['medical-report']);
  }

}
