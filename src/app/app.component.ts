import { ElementRef, Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { PartyListsService } from './services/party-lists.service';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs/Observable';

import { } from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    console.log(`logged in main: ${this.isLoggedIn}`);

    this.authService.isLoggedIn().subscribe((data: any) => {
      console.log(data);
      this.isLoggedIn = data;
    });
  }
}
