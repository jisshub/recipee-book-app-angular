import { Component, OnInit, Input } from '@angular/core';
import { Recipee } from './recipees.model';

@Component({
  selector: 'app-recipees',
  templateUrl: './recipees.component.html',
  styleUrls: ['./recipees.component.css']
})
export class RecipeesComponent implements OnInit {
  selectedRecipee: Recipee; 
  
  constructor() { }

  ngOnInit(): void {
  }

  // receive the emiited data here as object

}
