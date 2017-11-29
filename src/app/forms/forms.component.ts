import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  _templateDrivenForms: string = 'Template Driven Forms';
  _modelDrivenForms: string = 'Model Driven Forms';
  
  _myName : string = 'Biresh John';

  userForm = new FormGroup({
    name : new FormControl('John Doe'),
    email: new FormControl(),
    address: new FormGroup({
      street : new FormControl(),
      city   : new FormControl(),
      postalcode: new FormControl()
    })
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }    

}
