import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.profileForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
    });

    this.userService.getUser().subscribe((user: User) => {
      this.profileForm.controls['username'].setValue(user.username);
      this.profileForm.controls['email'].setValue(user.email);
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
