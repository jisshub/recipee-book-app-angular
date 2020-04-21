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
    ingredients: Ingredient[]=[
      new Ingredient("fsdas", 123),
      new Ingredient("dgdsd", 223),
    ]
    constructor() {

     }

  ngOnInit(): void {
  }

}
