import { Component, OnInit, Input } from '@angular/core';
import { Recipee } from './recipees.model';
import { RecipeeService } from './recipee.service';

@Component({
  selector: 'app-recipees',
  templateUrl: './recipees.component.html',
  styleUrls: ['./recipees.component.css'],
  providers: [RecipeeService],
})
export class RecipeesComponent implements OnInit {
  selectedRecipee: Recipee; 
  
  // inject recipeeService instance here
  constructor(private recipeeService: RecipeeService) { }

  // listen to recipee Element emitted by recipee-item.compoenet
  // assign it to selectedRecipee peoprty here,
  
  ngOnInit(): void {
    this.recipeeService.recipeeSelected.subscribe(
      (recipeeEl: Recipee)=>{
        this.selectedRecipee = recipeeEl;
      }
    )
  }

  // receive the emiited data here as object

}
