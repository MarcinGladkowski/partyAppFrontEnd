import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {User} from '../user';
import {Form, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  user: User;
  fileUpload: File = null;
  avatarForm: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.avatarForm = this.fb.group({});

    this.authService.getProfile().subscribe(user => {
      this.user = user;
    });
  }

  onSubmit() {
    const form = { avatar: this.fileUpload };
    this.userService.updateAvatar(form).subscribe((user: User) => {
      console.log(user);
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {

      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.fileUpload = file;
      };
    }
  }

}
