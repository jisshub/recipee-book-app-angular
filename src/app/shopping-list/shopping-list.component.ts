import { Component, OnInit } from '@angular/core';

// import Ingredient class from 
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
    // create an ingredients array of type Ingredient class
    ingredients: Ingredient[]=[]
    constructor() {}

  ngOnInit(): void {}
  onIngData(getEmittedData: {name: string, amount: string}){
    // push the emitted data to array as 
    this.ingredients.push(new Ingredient(getEmittedData.name, getEmittedData.amount))
  }

}
