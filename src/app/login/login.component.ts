import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
 
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
    private formBuilder: FormBuilder,
    private router: Router
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
         // if login - redirect to panel
         this.router.navigate(['/party/list']);
      }
    });

  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(JSON.stringify(this.loginForm.value));
  }

}
