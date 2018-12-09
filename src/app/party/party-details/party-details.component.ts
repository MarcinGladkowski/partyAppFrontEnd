import { PartyListsService } from './../../services/party-lists.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.scss']
})
export class PartyDetailsComponent implements OnInit {

  party;

  constructor(
    private partyListService: PartyListsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.partyListService.getParty(params.id).subscribe((data) => {
        this.party = data;
      });
    });

  }
}
