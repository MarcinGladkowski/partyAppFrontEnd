import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { PartyListsService } from '../services/party-lists.service';
import {defaultMapStyle} from './map.styles';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  partyEvents = [];
  imagesPath = environment.iconsDir;
  latitude: number;
  longitude: number;
  zoom = 4;
  customStyles = defaultMapStyle;

  constructor(private partyListsService: PartyListsService) { }

  ngOnInit() {

    this.getUserPositon();

    this.partyListsService.parties$.subscribe((data: any) => {
      this.partyEvents = data;
    });
  }
  /**
   * Function uses native geolocation form browser
   */
  getUserPositon() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(`Szerokość geograficzna: ${this.latitude}`);
        console.log(`Długość geograficzna: ${this.longitude}`);
      });
    } else {
      alert(`Geolocation is not supported by this browser.`);
    }
  }

}
