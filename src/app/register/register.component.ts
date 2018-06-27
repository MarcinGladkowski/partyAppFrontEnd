import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { repeat } from 'rxjs/operators';
import { UserService  } from '../services/user.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  @ViewChild('modal') public modalRef: ModalDirective;

  constructor(private userService: UserService) { }

  showModal() {
    this.modalRef.show();
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repeatPassword: new FormControl()
    });
  }

  onSubmit() {
    this.userService.register(JSON.stringify(this.registerForm.value));
  }

}
