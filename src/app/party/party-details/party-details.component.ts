import {PartyListsService} from './../../services/party-lists.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Party} from '../party';
import {AuthService} from '../../services/auth.service';
import {User} from '../../user/user';
import {environment} from './../../../environments/environment';

@Component({
  selector: 'app-party-details',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.scss']
})
export class PartyDetailsComponent implements OnInit {

  party$: Observable<Party>;
  user$: Observable<User>;
  userInParty = false;
  user: User;
  environmentPath: string = environment.upload;

  constructor(
    private partyListService: PartyListsService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.party$ = this.partyListService.getParty(params.id);
    });

    this.user$ = this.authService.getProfile();
    this.user = this.authService.user.getValue();

    this.party$.subscribe(party => {
      const inParty = party.participants.filter((participant) => participant._id === this.user._id );
      if (inParty.length > 0) {
        this.userInParty = true;
      }

    });
  }

  addParticipant(id: string) {
    this.party$ = this.partyListService.addParticipant(id, this.authService.user.getValue());
    this.userInParty = true;
  }

  removeParticipant(id: string) {
    this.party$ = this.partyListService.removeParticipant(id, this.authService.user.getValue());
    this.userInParty = false;
  }
}

