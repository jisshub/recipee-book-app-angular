import { Injectable, EventEmitter } from "@angular/core";
import { Recipee } from "../recipees/recipees.model";
import { Ingredient } from '../shared/ingredient.model';

@Injectable() export class RecipeeService {

    // create an event emitter of type Recipee
    recipeeSelected = new EventEmitter<Recipee>();

    private recipeeList: Recipee[] = [
        // instantiate Recipee class - pass arguments
        new Recipee("a test recipee for all", "a delicious recipee for all", 
        "https://www.andiemitchell.com/wp-content/uploads/2011/01/baked-buffalo-chicken-rolls-1-680x477.jpg", [new Ingredient("sdasd", '23213'), new Ingredient("asdsad", "2432")]),

        new Recipee("a test recipee for all", "a delicious recipee for all", 
        "https://www.andiemitchell.com/wp-content/uploads/2011/01/baked-buffalo-chicken-rolls-1-680x477.jpg", [new Ingredient("das", "22"), new Ingredient("adas", "123")]),

        new Recipee("a new test recipee", "lorem ipsum", "https://www.andiemitchell.com/wp-content/uploads/2011/01/baked-buffalo-chicken-rolls-1-680x477.jpg", [new Ingredient('asdasd', '333'),
        new Ingredient("adasd", "33")])
      ];

      getRecipee(){
        //   return a copy pf recipeeList Array
        return this.recipeeList.slice()
      }
}
