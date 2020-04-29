import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() ingredients = new EventEmitter<{name: string, amount: string}>()
  constructor() { }

  ngOnInit(): void {
  }
  onAddIngredients(getIngName: HTMLInputElement, getIngAmount: HTMLInputElement){
      this.ingredients.emit({
        name: getIngName.value,
        amount: getIngAmount.value
      })
  }
}
