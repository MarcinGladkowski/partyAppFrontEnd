import { Component, OnInit } from '@angular/core';
import { PartyListsService } from '../../services/party-lists.service';

@Component({
  selector: 'app-partylist',
  templateUrl: './partylist.component.html',
  styleUrls: ['./partylist.component.css']
})
export class PartylistComponent implements OnInit {

  constructor(private partyListsService: PartyListsService) { }

  partyEvents = [];

  ngOnInit() {

    this.partyListsService.getPartyStream().subscribe((parties: any) => {
      this.partyEvents = parties;
      console.log(`dane w kompomencie: `, this.partyEvents);
    });

  }

}
