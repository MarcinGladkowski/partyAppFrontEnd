import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordRepeatValidator} from '../../validators/password-repeat-validator';
import {AuthService} from '../../services/auth.service';
import {User} from '../user';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  updatePassword: FormGroup;
  message = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.updatePassword = this.fb.group({
      oldPassword: new FormControl('', [Validators.required, Validators.min(3)]),
      newPassword: new FormControl('', [Validators.required, Validators.min(3)]),
      newPasswordRepeat: new FormControl('', [Validators.required, Validators.min(3)])
    }, {validator: PasswordRepeatValidator });
  }

  onSubmit() {
    if (this.updatePassword.valid) {
      this.authService.updatePassword(this.updatePassword.value).subscribe((user: User) => {
        if (user) {
          this.authService.user.next(user);
          this.message = true;
          setTimeout(() => { this.message = false; }, 2000);
        }
      });
    }
  }
}
