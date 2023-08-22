import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    //In this context, we use the photos mainly for demo purposes.
    const items = [
      {id: 1, name: 'Smart Watch', price: 15000, image: './assets/sw.png'},
      {id: 2, name: 'Speaker', price: 3200, image: './assets/speaker.png'},
      {id: 3, name: 'Console', price: 6400, image: './assets/console.png'},
      {id: 4, name: 'Charger', price: 990, image: './assets/charger.png'},
      {id: 5, name: 'Camera', price: 12000, image: './assets/camera.png'},
      {id: 6, name: 'Headphone', price: 5000, image: './assets/headphone.png'},
    ];
    const orders = [
      {id: 1, itemList: [{id: 1, name: 'Smart Watch', price: 15000, image: './assets/sw.png'},{id: 2, name: 'Speaker', price: 3200, image: '../assets/speaker.png'}], total: 18200, status: 'Closed'},
      {id: 2, itemList: [{id: 6, name: 'Headphone', price: 5000, image: './assets/headphone.png'},{id: 4, name: 'Charger', price: 990, image: './assets/charger.png'}], total: 5990, status: 'Processing'},
      {id: 1, itemList: [{id: 3, name: 'Console', price: 6400, image: './assets/console.png'},{id: 2, name: 'Speaker', price: 3200, image: '../assets/speaker.png'}], total: 9600, status: 'Open'},
      {id: 2, itemList: [{id: 5, name: 'Camera', price: 12000, image: './assets/camera.png'},{id: 4, name: 'Charger', price: 990, image: './assets/charger.png'}], total: 12990, status: 'Open'},
      {id: 1, itemList: [{id: 2, name: 'Charger', price: 990, image: './assets/charger.png'},{id: 3, name: 'Smart Watch', price: 15000, image: '../assets/sw.png'}], total: 15990, status: 'Closed'},
 
    ];
    return {items, orders};
  }
}