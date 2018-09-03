import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  isLoggedIn;


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      'email': [null, Validators.email],
      'password': [null, Validators.required],
    });

    this.authService.isLoggedIn().subscribe((data: any) => {
      console.log(`logged in login: ${data}`);
      this.isLoggedIn = data;
      if (data) {
         // action
      }

    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(JSON.stringify(this.loginForm.value));
  }

}
