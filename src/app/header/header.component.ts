import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn;

  logout() {
    this.redirectAfterLogout();
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit() {

    this.authService.isLoggedIn().subscribe((data: any) => {
      this.isLoggedIn = data;
    });

  }

  redirectAfterLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
