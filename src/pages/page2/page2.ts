import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
//import { Page1 } from '../page1/page1';
import { Page3 } from '../page3/page3';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
  
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, price: string}>;
  searchQuery: string = '';
  myItems: string[];
  storage;
  constructor(public navCtrl: NavController, public navParams: NavParams, store: Storage) {

    this.storage = store;
    debugger; 
    this.selectedItem = navParams.get('item');
   
    var items = [];
    this.storage.forEach(function(value, key, iterationNumber){
          console.log("Page 2 value test " + value)
          console.log("Page 2 key test " + key)
      
      })
      
      var person = {title:"John", note:"Doe", price:"something"};
      items.push(person);
      items.push(person);
      
      debugger;

      this.storage.forEach(function(value, key, iterationNumber){
          var person = {title:key, note:value[1], price:value[2]};
          items.push(person);
          console.log("Page 2 value test constructor " + value)
          console.log("Page 2 key test " + key)
      
      })
      this.items = items;
    
    /*
    this.storage.forEach(function(value, key, iterationNumber){

      this.items.push(person);
      
      this.items.push({
        title: 'Name: ',
        note: 'description',
        price: 'price'
        //note: 'Description: ' + value[1],
        //price: 'Price: ' + value[2]

      })
      
    })
    */
    
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
  }

  initializeItems()
  {
    var keys = this.storage.keys();
    
    if(keys != null)
    {
      console.log("Key length " + keys.length);
    }
    else
    {
      console.log("Is Null")
    }
    /*for(i = 0; i 
    console.log(this.storage.length());
    this.storage.forEach(obj => {
      console.log("Value" + obj.value);
      console.log("Key " + obj.key);
      console.log("Iteration Number" + obj.iterationNumber);
   
           
    });
    */
    
    
  }
  
   getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
  }
  movePageThree(){
      this.navCtrl.push(Page3);
  }

  consoleTest(){
  

  this.storage.forEach(function(value, key, iterationNumber){
          console.log("Page 2 value test consoleTest " + value)
          console.log("Page 2 key test " + key)
      
      })
    
  }
}
