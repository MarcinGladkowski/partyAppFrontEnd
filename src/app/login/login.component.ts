import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  isLoggedIn: Observable<boolean>;

  @ViewChild('modal') public modalRef: ModalDirective;

  constructor(private authService: AuthService) { }

  showModal() {
    this.modalRef.show();
  }

  closeModal() {
    this.modalRef.hide();
  }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
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
