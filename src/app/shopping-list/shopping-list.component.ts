import { Component, OnInit } from '@angular/core';

// import Ingredient class from 
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from './shopping_list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  
    // create an ingredients array of type Ingredient class
    ingredients: Ingredient[]=[];

    // inject shoppingService instance
    constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.ingredients;
  }

}
