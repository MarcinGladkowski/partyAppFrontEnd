import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { UserService  } from '../services/user.service';
import {RegisterModalComponent} from './register-modal/register-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  @ViewChild('modal') public registerModal: RegisterModalComponent;

  constructor(private userService: UserService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(6)]],
      email: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      repeatPassword: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  showModal() {
    this.registerModal.show();
  }

  onSubmit() {
    this.userService.register(this.registerForm.value)
    .subscribe((data: any) => {
      if (data) { this.showModal(); }
    });
  }

}
