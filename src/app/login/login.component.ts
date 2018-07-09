import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  isLoggedIn;

  @ViewChild('modal') public modalRef: ModalDirective;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  showModal() {
    this.modalRef.show();
  }

  closeModal() {
    this.modalRef.hide();
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      'email': [null, Validators.email],
      'password': [null, Validators.required],
    });

    this.authService.isLoggedIn().subscribe((data: any) => {
      console.log(`logged in login: ${data}`);
      this.isLoggedIn = data;
      if (data) {
         this.closeModal();
      }

    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(JSON.stringify(this.loginForm.value));
  }

}
