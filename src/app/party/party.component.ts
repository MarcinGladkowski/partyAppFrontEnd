import { PartyTypeService } from './../services/party-type.service';
import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { FormGroup, FormControl,  Validators, FormBuilder } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { PartyListsService } from '../services/party-lists.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  partyForm: FormGroup;
  searchControl: FormControl;
  latitude: number;
  longitude: number;
  partyTypes = [];

  constructor(
     private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone,
     private partyListsService: PartyListsService,
     private partyTypeService: PartyTypeService,
     private formBuilder: FormBuilder,
     private authService: AuthService
  ) { }

  @ViewChild('search') public searchElementRef: ElementRef;

  ngOnInit() {

    this.partyTypeService.getPartyTypesLists().subscribe((data: any) => {
      this.partyTypes = data.types;
    });

    this.authService.checkIsUserLogin();

    this.partyForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'desc': [null, Validators.required],
      'type': [null, Validators.required],
      'private': [null, Validators.required]
    });

     this.searchControl = new FormControl();

     // load Places Autocomplete
     this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {

          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

        });
      });
    });
  }

  onSubmit() {

    this.partyForm.value.latitude = this.latitude;
    this.partyForm.value.longitude = this.longitude;

    const newParty = this.partyForm.value;

    /** @TODO if place is not found (lat, lng) not send request */
    if (this.partyForm.value.latitude !== undefined || this.partyForm.value.longitude !== undefined) {
      this.partyListsService.saveParty(newParty);
    }

    this.partyForm.reset();
    this.searchControl.setValue('');
  }
}
