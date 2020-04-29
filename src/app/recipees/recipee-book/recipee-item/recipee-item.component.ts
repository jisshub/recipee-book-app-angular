import { Component, Input,Output, EventEmitter } from "@angular/core";
import { Recipee } from "../../recipees.model";

@Component({
    selector: "app-recipee-item",
    templateUrl: "./recipee-item.component.html",
    styleUrls: ["./recipee-item.component.css"]
})

export class RecipeeItemComponent{

  // get the input data passed from recipee-book component
  @Input() recipeeEl: Recipee;

  // create event emitter object that emits void
  // to recipees component.
  @Output() recipeeInfo = new EventEmitter<void>();

  onRecipeeData(){
    this.recipeeInfo.emit()
  }
}