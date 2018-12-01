import { ElementRef, Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { PartyListsService } from './services/party-lists.service';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { } from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      this.authService.checkIsUserLogin();
    });
  }

  ngOnInit() {
    this.authService.checkIsUserLogin();
  }
}
