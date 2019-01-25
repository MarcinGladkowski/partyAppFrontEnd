import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {User} from '../user/user';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn;
  user: User;
  environmentPath: string = environment.upload;

  logout() {
    this.redirectAfterLogout();
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

    this.authService.isLoggedIn().subscribe((data: boolean) => {
      this.isLoggedIn = data;
    });

    this.authService.getProfile().subscribe((user: User) => {
      this.user = user;
    });

  }
  private redirectAfterLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
