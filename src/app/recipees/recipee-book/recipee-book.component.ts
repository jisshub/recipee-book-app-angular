import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipee } from "../recipees.model";

@Component({
  selector: 'app-recipee-book',
  templateUrl: './recipee-book.component.html',
  styleUrls: ['./recipee-book.component.css']
})
export class RecipeeBookComponent implements OnInit {

  @Output() recipeeWasSelected = new EventEmitter<Recipee>();
        // here recipeeList s an array with type of Recipee model
  // which means it only holds the same properties of Recipee model.
  // it cant hold other properties not defined in the model
  recipeeList: Recipee[] = [
    // instantiate Recipee class - pass arguments
    new Recipee("a test recipee for all", "a delicious recipee for all", 
    "https://www.andiemitchell.com/wp-content/uploads/2011/01/baked-buffalo-chicken-rolls-1-680x477.jpg"),
    new Recipee("a test recipee for all", "a delicious recipee for all", 
    "https://www.andiemitchell.com/wp-content/uploads/2011/01/baked-buffalo-chicken-rolls-1-680x477.jpg"),
    new Recipee("a new test recipee", "lorem ipsum", "https://www.andiemitchell.com/wp-content/uploads/2011/01/baked-buffalo-chicken-rolls-1-680x477.jpg")
  ];
    
  constructor() { }


  ngOnInit(): void {  }

  onRecipeeSelected(recipee: Recipee){
    this.recipeeWasSelected.emit(recipee);
  }
}
