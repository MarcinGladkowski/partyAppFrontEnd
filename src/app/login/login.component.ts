import { UserValidator } from './../validators/user-validator';
import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      'email': [
        null,
        [Validators.email, Validators.min(5)],
        [UserValidator.userExists]
      ],
      'password': [null, Validators.required],
    });
  }

  /**
   * Send login form to service
   */
  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((data: any) => {
      if (data && (data.auth === true)) {
        this.router.navigate(['/party/list']);
      }
    },
      (error: HttpErrorResponse) => {
      this.error = error.message;
    });
  }

}
