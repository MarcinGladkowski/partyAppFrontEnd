import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { FormGroup, FormControl,  Validators, FormBuilder } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { MapsAPILoader } from '@agm/core';
import { PartyListsService } from '../services/party-lists.service';


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  public partyForm: FormGroup;
  public searchControl: FormControl;
  public latitude: number;
  public longitude: number;

  @ViewChild('modal') public modalRef: ModalDirective;
  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(
     private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone,
     private partyListsService: PartyListsService,
     private formBuilder: FormBuilder
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


    this.partyForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'desc': [null, Validators.required]
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

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

          // set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
        });
      });
    });
  }

  onSubmit() {

    this.partyForm.value.latitude = this.latitude;
    this.partyForm.value.longitude = this.longitude;

    const newParty = this.partyForm.value;

    console.log(newParty);

    if (this.partyForm.value.latitude !== undefined && this.partyForm.value.longitude !== undefined) {
      this.partyListsService.create(newParty);
    }

  }

}
