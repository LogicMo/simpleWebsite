import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeeresult',
  templateUrl: './employeeresult.component.html',
  styleUrls: ['./employeeresult.component.css']
})
export class EmployeeresultComponent implements OnInit {

  constructor( private _activatedRoute: ActivatedRoute, private _router: Router ) { }
  id ;
  k;

  ngOnInit() {

    this.id = parseInt(this._activatedRoute.snapshot.params['id']);   
    this.k = typeof(this.id);
  }

  goBack() {

    console.log("hello");
    this._router.navigate( [ '/employeelist' ] );
  }

}
