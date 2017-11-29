import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit() {
  }
 
  list = [
    { "id": "1", "name": "John Doe" },
    { "id": "2", "name": "Steve Smith" },
    { "id": "3", "name": "Carla Megan" },
    { "id": "4", "name": "Will Smith" },
    { "id": "5", "name": "Havell Piers" }
  ];

  onSelect(items) {
    // console.log(items);
    this._router.navigate( [ '/employeelist', items.id ] );
  }

}
