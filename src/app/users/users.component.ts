import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { NgForm, Form } from '@angular/forms';

import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private _baseService: BaseService ) { }

  private _databaseData:any;
  private _insertDbResult;

  ngOnInit() {
  }

  getUser() {
    
    this._baseService.getUserFromDB().subscribe( data => {

      this._databaseData = data;     
    } );
  }

  resetTable() {
    this._databaseData = [];
  }
  
  yo(x) {
    console.log(x);
  }

  postData: string;

  model = new User();

  addUser(data) {

    console.log(data);
    let finalData = JSON.stringify(data);

    this._baseService.addUsersToDB(finalData).subscribe(

        () => { console.log(data)  },
        err => console.error(err),
        () => console.log("Finished!")
    );
  }





}