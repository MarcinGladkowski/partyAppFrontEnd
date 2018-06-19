import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { repeat } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;


  constructor() { }

  register() {
    console.log('test');
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repeatPassword: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

}
