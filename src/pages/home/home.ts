import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{ title: string, voltage: string, color: string }>;

  constructor(public navCtrl: NavController) {
    this.items=[];
    for (let i = 1; i< 11; i++){
      let tempColor = '';
      let tempVoltage = Math.random()*10000;
      if (tempVoltage<3000) tempColor = 'danger';
      else tempColor = 'primary';
      this.items.push({
        title: 'Nede med han...',
        voltage: tempVoltage,
        color: tempColor
      })
    }

  }

}
