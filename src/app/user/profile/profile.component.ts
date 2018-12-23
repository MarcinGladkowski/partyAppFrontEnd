import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(
    private userService: UserService,
    private authService: AuthService
    ) { }

  ngOnInit() {

    this.profileForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
    });

    this.authService.getProfile().subscribe((data: any) => {
      if (data) {
        this.profileForm.controls['username'].setValue(data.username);
        this.profileForm.controls['email'].setValue(data.email);
      }
    });
  }
  onSubmit() {
    this.userService.update(this.profileForm.value).subscribe((user: User) => {
      if (user) {
        this.authService.user.next(user);
      }
    });
  }

}
