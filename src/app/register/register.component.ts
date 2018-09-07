import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService  } from '../services/user.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  @ViewChild('content') public contentModal;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repeatPassword: new FormControl()
    });
  }

  showModal() {
    this.contentModal.show();
  }

  onSubmit() {
    this.userService.register(JSON.stringify(this.registerForm.value))
    .subscribe((data: any) => {
      if (data.status === 'ok') {
        this.showModal();
      }
      return data;
    });
  }

}
