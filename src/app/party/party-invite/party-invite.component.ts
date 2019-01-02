import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {User} from '../../user/user';
import {UserService} from '../../services/user.service';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {PartyInvitesService} from '../../services/party-invites.service';
import {ActivatedRoute} from '@angular/router';
import {PartyInvite} from './party-invite';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-party-invite',
  templateUrl: './party-invite.component.html',
  styleUrls: ['./party-invite.component.scss']
})
export class PartyInviteComponent implements OnInit {

  partyId: string;
  stateCtrl = new FormControl();
  filteredUsers: Observable<User[]>;
  inviteList: PartyInvite[];

  constructor(
    private userService: UserService,
    private partyInvitesService: PartyInvitesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
       this.partyId = params.id;
       this.partyInvitesService.getPartyInvites(this.partyId).subscribe(data => {
         this.inviteList = data;
       });
    });
    this.filteredUsers = this.userService.getUsers();
  }

  selected(event: MatAutocompleteSelectedEvent, user: User) {
    const result = this.inviteList.filter(invited => invited._id === user._id);
    if (!result.length) {
      this.partyInvitesService.create(this.partyId, user._id).subscribe((data) => {
        this.inviteList = [... this.inviteList, data];
      });
    }
    // @TODO add by post to document
    this.stateCtrl.setValue('');
  }
}
