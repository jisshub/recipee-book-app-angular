import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-recipee-app';
  // set a feature initially,
  loadedFeature: string = "recipee";

  // define method that got the event data
  OnEmitter(feature: string){
    this.loadedFeature = feature;
  }
}
