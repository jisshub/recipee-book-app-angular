import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipee } from "../recipees.model";
import { RecipeeService } from '../recipee.service';

@Component({
  selector: 'app-recipee-book',
  templateUrl: './recipee-book.component.html',
  styleUrls: ['./recipee-book.component.css']
})
export class RecipeeBookComponent implements OnInit {

        // here recipeeList s an array with type of Recipee model
  // which means it only holds the same properties of Recipee model.
  // it cant hold other properties not defined in the model
  recipeeList: Recipee[];
    
  // inject instance of service to this component
  constructor(private recipeeService: RecipeeService) {}


  ngOnInit(): void { 
    // assign the array returned from recipee service to recipeeList propety defined here
    this.recipeeList = this.recipeeService.getRecipee();
   }

}
