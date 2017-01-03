import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  storage;
  testArray = ["name", "description", "price"];
  todo = {
    "name": "",
    "description": "",
    "price": ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage) {
  	console.log("name constructor" + JSON.stringify(this.todo));
    this.storage = storage;
  }


	onCreateListing(){
	debugger;
	this.testArray = [this.todo.name, this.todo.description, this.todo.price]
	this.storage.set(this.todo.name, this.testArray);
	this.storage.get('testKey').then((val) =>{
      console.log('Testing testKey ' + JSON.stringify(val.name));
    })

		
		this.storage.forEach(function(value, key, iterationNumber){
      		console.log("This is test for forEach value 3" + value)
      		console.log("This is test for forEach key 3" + key)
      		console.log("This is test for forEach iterationNumber 3" + iterationNumber)
    	})
 
    	this.navCtrl.pop();
	}

}


