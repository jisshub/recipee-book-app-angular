import { Component, OnInit, Input } from '@angular/core';
import { Recipee } from '../recipees.model';

@Component({
  selector: 'app-recipee-details',
  templateUrl: './recipee-details.component.html',
  styleUrls: ['./recipee-details.component.css']
})
export class RecipeeDetailsComponent implements OnInit {
  @Input() recipee: Recipee;
  constructor() { }

  ngOnInit(): void {
  }

}
