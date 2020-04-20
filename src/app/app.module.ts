import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeeBookComponent } from './recipees/recipee-book/recipee-book.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeeItemComponent } from "./recipees/recipee-book/recipee-item/recipee-item.component";
import { RecipeeDetailsComponent } from './recipees/recipee-details/recipee-details.component';
import { RecipeesComponent } from "./recipees/recipees.component";

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeeBookComponent,
    ShoppingListEditComponent,
    RecipeeItemComponent,
    RecipeeDetailsComponent,
    RecipeesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
