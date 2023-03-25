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

no:number =0;
// fungsi tambah
up(){
  this.no++;
  
}
// fungsi kurangi
down(){
  // validasi nomor
  if(this.no > 0){
    this.no--;
  }
}

// fungsi reset
reset() {
  this.no = 0;
}

  
// public counter(str:string){
//   (str === 'up') ? this.no++ : this.no--  ;
  
// }


// public up(){
//   this.value++;
// }

// public down(){
//   this.value--;
// }




  ngOnInit() {
  }



  homePage() {
    this.route.navigate(['/home']);
  }


  // public no:number = 0;
}
