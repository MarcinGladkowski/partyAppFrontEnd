import { ElementRef, NgModule, Component, OnInit, NgZone, ViewChild  } from '@angular/core';
import { FormControl } from '@angular/forms';
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
    private ngZone: NgZone
  ) {
    this.places = [
      {
        name: 'DefaultEvent',
        lat: 50.254968,
        lon: 19.0275632
      }
    ];
  }


  apiKey = 'AIzaSyAt9ym5lJu_8pguSVm6idX0nfQtgy-12dw';

  public places: Array<Object>;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;



  devices = [
    {
      latitude: 50.254968,
      longitude: 19.0275632
    },
    {
      latitude: 50.2548661,
      longitude: 19.0350241
    }
  ];

  place = {
    name: '',
    latitude: 0,
    lon: 0
  };

  ngOnInit() {
    // set google maps defaults
    this.zoom = 4;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    // this.setCurrentPosition();

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
          // const newPlace = {
          //   name: 'Event',
          //   lat: place.geometry.location.lat(),
          //   lon: place.geometry.location.lng()
          // };
          // console.log(newPlace);
          // set latitude, longitude and zoom
          // this.places.push(newPlace);
          this.zoom = 12;
        });
      });
    });
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
