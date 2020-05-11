import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable() export class ShoppingListService{

    // create an ingredients property of type Ingredient type
    ingredients: Ingredient[]=[];

    // define a method na dpass data
    addingIngredients(getData: {name: string, amount: string}){
        this.ingredients.push(new Ingredient(getData.name, getData.amount))
    }
    
}   