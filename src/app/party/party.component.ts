import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  public partyForm: FormGroup;
  public searchControl: FormControl;

  @ViewChild('modal') public modalRef: ModalDirective;
  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(
     private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone,
  ) { }

  showModal() {
    this.modalRef.show();
  }

  ngOnInit() {

  // Add fields to party form
  //   close: false,
  //   latitude: null,
  //   longitude: null,
  //   label: 'A',
  //   draggable: true

    this.partyForm = new FormGroup({
      name: new FormControl(),
      desc: new FormControl(),
    });

    this.searchControl = new FormControl();

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

          console.log(place.geometry.location.lat());
          console.log(place.geometry.location.lng());

          // set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
        });
      });
    });
  }

  onSubmit() {
    console.log(this.partyForm.value);
  }

}
