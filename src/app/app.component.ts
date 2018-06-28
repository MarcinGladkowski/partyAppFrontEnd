import { ElementRef, Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { PartyListsService } from './services/party-lists.service';
import { AuthService } from './services/auth.service';
import {} from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    // private mapsAPILoader: MapsAPILoader,
    // private ngZone: NgZone,
    private partyListsService: PartyListsService,
    private authService: AuthService
  ) {
    this.loggedIn = false;

  }

  loginComponent = true;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public newEvent: FormGroup;
  public zoom: number;
  // refactoring of form add event
  public newParty: FormGroup;
  // check is logged
  loggedIn: any;

  public isModalShown = true;

  openLoginModal = true;

  @ViewChild('search') public searchElementRef: ElementRef;

  // partyEvent = {
  //   id: null,
  //   name: '',
  //   desc: '',
  //   close: false,
  //   latitude: null,
  //   longitude: null,
  //   label: 'A',
  //   draggable: true
  // };


  partyEvents = [];


  ngOnInit() {

    this.authService.isLoggedIn.subscribe(
      (data) => {
        console.log(data);
        this.loggedIn = data;
      }
    );

    // load from service when component is ready
    this.partyListsService.getPartyLists().subscribe(
      (data: any) => {
        this.partyEvents = data.parties;
      }
    );
    // this.partyEvents = this.partyListsService.getPartyLists();

    // set google maps defaults
    this.latitude = 50.254968;
    this.longitude = 19.0275632;

    this.zoom = 12;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    // this.setCurrentPosition();

    // load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //   const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ['address']
    //   });
    //   autocomplete.addListener('place_changed', () => {
    //     this.ngZone.run(() => {
    //       const place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
          // const newPlace = {
          //   id: 3,
          //   name: this.partyEvent.name,
          //   desc: this.partyEvent.desc,
          //   latitude: place.geometry.location.lat(),
          //   longitude: place.geometry.location.lng(),
          //   label: 'A',
          //   draggable: true
          // };
          // set latitude, longitude and zoom
          // this.partyEvents.push(newPlace);
          // this.partyListsService.create(newPlace);
          // this.partyEvent.name = '';
          // this.partyEvent.desc = '';
          // set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
    //       this.zoom = 12;
    //     });
    //   });
    // });
  }

  // private setCurrentPosition() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }


}
