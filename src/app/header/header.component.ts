import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn;

  logout() {
    this.authService.logout();
  }

  constructor(
    private authService: AuthService
  ) {}


  ngOnInit() {

    console.log(`logged in header: ${this.isLoggedIn}`);

    this.authService.isLoggedIn().subscribe((data: any) => {
      console.log(`logged in header: ${data}`);
      this.isLoggedIn = data;
    });

  }

}
