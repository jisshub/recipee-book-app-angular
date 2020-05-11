import { Component, OnInit} from '@angular/core';
import { ShoppingListService } from '../shopping_list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddIngredients(getIngName: HTMLInputElement, getIngAmount: HTMLInputElement){

    this.shoppingService.addingIngredients({
      name: getIngName.value,
      amount: getIngAmount.value
    })

  }
}
