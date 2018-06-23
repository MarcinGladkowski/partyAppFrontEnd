import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { repeat } from 'rxjs/operators';
import { UserService  } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private userService: UserService) { }

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
    // this.userService.test();
    this.userService.register(JSON.stringify(this.registerForm.value)).subscribe(res => {
      console.log(res);
    });
  }

}
