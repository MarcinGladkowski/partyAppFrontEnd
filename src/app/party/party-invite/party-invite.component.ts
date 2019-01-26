import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {User} from '../../user/user';
import {UserService} from '../../services/user.service';
import {MatAutocompleteSelectedEvent} from '@angular/material';
import {PartyInvitesService} from '../../services/party-invites.service';
import {ActivatedRoute} from '@angular/router';
import {PartyInvite} from './party-invite';
import {environment} from '../../../environments/environment';

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
  environmentPath: string = environment.upload;

  constructor(
    private userService: UserService,
    private partyInvitesService: PartyInvitesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
       this.partyId = params.id;
       this.getPartyInvites();
    });
    this.filteredUsers = this.userService.getUsers();
  }

  private getPartyInvites() {
    this.partyInvitesService.getPartyInvites(this.partyId).subscribe(data => {
      this.inviteList = data;
    });
  }

  selected(event: MatAutocompleteSelectedEvent, user: User) {
    const result = this.inviteList.filter(invite => invite.userInvited._id === user._id);
    if (!result.length) {
       this.partyInvitesService.create(this.partyId, user._id).subscribe((data) => {
         this.inviteList = [...this.inviteList, data];
       });
    }
    this.stateCtrl.setValue('');
  }

  sendInvite(partyInviteId: string) {
    this.partyInvitesService.sendInvite(partyInviteId).subscribe((partyInvite: PartyInvite) => {
      if (partyInvite) {
        this.getPartyInvites();
      }
    });
  }
}
