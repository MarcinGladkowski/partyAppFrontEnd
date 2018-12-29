import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import {User} from '../../user/user';
import {UserService} from '../../services/user.service';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-party-invite',
  templateUrl: './party-invite.component.html',
  styleUrls: ['./party-invite.component.scss']
})
export class PartyInviteComponent implements OnInit {

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  filteredUsers: Observable<User[]>;

  constructor(private userService: UserService) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      tap(user => console.log(user))
    );
  }

  ngOnInit() {
    this.filteredUsers = this.userService.getUsers();
  }
}
