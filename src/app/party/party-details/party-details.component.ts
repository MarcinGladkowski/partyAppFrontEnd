import { PartyListsService } from './../../services/party-lists.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {Party} from '../party';

@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.scss']
})
export class PartyDetailsComponent implements OnInit {

  party$: Observable<Party>;

  constructor(
    private partyListService: PartyListsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.party$ = this.partyListService.getParty(params.id);
      console.log(this.party$);
    });

  }
}
