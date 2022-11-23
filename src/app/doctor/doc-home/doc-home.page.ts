import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.page.html',
  styleUrls: ['./doc-home.page.scss'],
})
export class DocHomePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  report(){
    this.router.navigate(['medical-report']);
  }
  forum(){
    this.router.navigate(['loginchat']);

  }
}
