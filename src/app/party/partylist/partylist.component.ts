import { Component, OnInit } from '@angular/core';
import { PartyListsService } from '../../services/party-lists.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-partylist',
  templateUrl: './partylist.component.html',
  styleUrls: ['./partylist.component.css']
})
export class PartylistComponent implements OnInit {

  constructor(
    private partyListsService: PartyListsService,
    private authService: AuthService
  ) { }

  partyEvents = [];

  ngOnInit() {

    this.authService.checkIsUserLogin();

    this.partyListsService.getPartyStream().subscribe((parties: any) => {
      this.partyEvents = parties;
    });

  }

}
