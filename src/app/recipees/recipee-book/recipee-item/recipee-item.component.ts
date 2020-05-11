import { Component, Input,Output, EventEmitter } from "@angular/core";
import { Recipee } from "../../recipees.model";
import { RecipeeService } from '../../recipee.service';

@Component({
    selector: "app-recipee-item",
    templateUrl: "./recipee-item.component.html",
    styleUrls: ["./recipee-item.component.css"]
})

export class RecipeeItemComponent{

  // inhecr recipeeService instance
  constructor(private recipeeService: RecipeeService){};

  // get the input data passed from recipee-book component
  @Input() recipeeEl: Recipee;

  // create event emitter object that emits void
  // to recipees component.

  onRecipeeData(){

    // emit the recipee
    this.recipeeService.recipeeSelected.emit(this.recipeeEl);
  }
}