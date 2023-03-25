import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  info: any = {};
  constructor(private route: Router) {}

  ngOnInit() {
  }



  homePage() {
    this.route.navigate(['/home']);
   }
}
