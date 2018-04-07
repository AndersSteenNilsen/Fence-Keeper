import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SensorProvider } from '../../providers/sensor/sensor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{ title: string, voltage: number, color: string }>;

  constructor(public navCtrl: NavController, public sensors: SensorProvider) {
      this.items = sensors.getAll();
  }

}
 