import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ModalDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  @ViewChild('modal') public modalRef: ModalDirective;

  constructor(private authService: AuthService) { }

  showModal() {
    this.modalRef.show();
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(JSON.stringify(this.loginForm.value));
  }

}
