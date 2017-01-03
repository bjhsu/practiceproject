import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, storage: Storage) {
  
    //storage.set('name', 'Max');

    storage.get('name').then((val) =>{
    	console.log('Your name is ' + val);
    })
    
  }

}
