import { ElementRef, Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { PartyListsService } from './services/party-lists.service';
import { AuthService } from './services/auth.service';
import { } from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {
    this.loggedIn = false;
  }

  // check is logged
  loggedIn: any;

  partyEvents = [];


  ngOnInit() {
  }
}
