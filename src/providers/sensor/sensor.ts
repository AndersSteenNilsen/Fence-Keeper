import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

/*
  Generated class for the SensorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SensorProvider {

  constructor() {
    console.log('Hello SensorProvider Provider');
  }

  getAll() {
    let items : Array<{ title: string, voltage: number, color: string }> = [];
    for (let i = 1; i< 11; i++){
      let tempColor = '';
      let tempVoltage = Math.random()*10000;
      if (tempVoltage<3000) tempColor = 'danger';
      else tempColor = 'primary';
      items.push({
        title: 'Nede med han...',
        voltage: tempVoltage,
        color: tempColor
      })
    }

    return items;
  }
}
