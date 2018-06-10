import { ElementRef, NgModule, Component, OnInit, NgZone, ViewChild  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) {}

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public newEvent: FormGroup;
  public zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  event = {
    name: '',
    desc: '',
    close: false
  };


  partyEvents = [
    {
      name: 'Domówka',
      latitude: 50.1826663,
      longitude: 19.1444923
    },
    {
      name: 'Impreza muzyczna',
      latitude: 50.2548661,
      longitude: 19.0350241
    }
  ];

  ngOnInit() {

    // set google maps defaults
    this.latitude = 50.254968;
    this.longitude = 19.0275632;

    this.zoom = 4;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          const newPlace = {
            name: 'Event',
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()
          };
          console.log(newPlace);
          // set latitude, longitude and zoom
          this.partyEvents.push(newPlace);

          // set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;

          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}
