import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeeBookComponent } from './recipee-book/recipee-book.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { RecipeeItemComponent } from "./recipee-item/recipee-item.component";
import { RecipeeDetailsComponent } from './recipee-details/recipee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeeBookComponent,
    ShoppingListEditComponent,
    RecipeeItemComponent,
    RecipeeDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
