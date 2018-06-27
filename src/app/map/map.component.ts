import { Component, OnInit } from '@angular/core';
import { PartyListsService } from '../services/party-lists.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  partyEvents = [];

  public latitude: number;
  public longitude: number;
  public zoom: number;

  constructor(private partyListsService: PartyListsService) { }

  ngOnInit() {

    this.latitude = 50.254968;
    this.longitude = 19.0275632;
    this.zoom = 12;
     // load from service when component is ready
     this.partyListsService.getPartyLists().subscribe(
      (data: any) => {
        this.partyEvents = data.parties;
      }
    );

  }

}
