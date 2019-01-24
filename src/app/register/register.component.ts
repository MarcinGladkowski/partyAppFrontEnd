import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService  } from '../services/user.service';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { UserValidator } from '../validators/user-validator';
import { PasswordRegisterRepeatValidator } from '../validators/password-repeat-validator';

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
      username:
        [null,
        [Validators.required, Validators.minLength(6)],
        [UserValidator.userExistsByUserName]],
      email:
        [null,
        [Validators.required, Validators.minLength(8), Validators.email],
        [UserValidator.userNotExistsByEmail]],
      password:
        [null,
        [Validators.required, Validators.minLength(8)]
      ],
      repeatPassword: [null, [Validators.required, Validators.minLength(8)]],
    }, {validator: PasswordRegisterRepeatValidator });
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
