import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import {PartyType} from '../party/party-type/party-type';
import {PartyInterface} from '../party/party-interface';
import {Party} from '../party/party';
import {User} from '../user/user';

@Injectable()
export class PartyListsService {

  public parties$: BehaviorSubject<any> = new BehaviorSubject([]);
  private partiesList = [];

  constructor(private http: HttpClient) {
    this.getParties();
  }

  getPartiesList() {
    return this.parties$.asObservable();
  }

  private createParty(partyAttrs) {
    return this.http.post(`${environment.api}/party`, partyAttrs).subscribe((response: any) => {
      this.partiesList.push(response.data);
      this.parties$.next(this.partiesList);
    });
  }

  private updateParty(partyAttrs) {
    // @TODO implement update
  }

  saveParty(partyAttrs) {
    // if (partyAttrs.id) { return this.updateParty(partyAttrs); }
    return this.createParty(partyAttrs);
  }

  getParties() {
    return this.http.get(`${environment.api}/party`).subscribe((data: any) => {
      this.partiesList = data.parties;
      this.parties$.next(data.parties);
    });
  }

  getParty(id: string) {
    return this.http.get<PartyInterface>(`${environment.api}/party/${id}`).pipe(
      map((partyAttrs) => new Party(partyAttrs))
    );
  }
  /** add new participant to party */
  addParticipant(id: string, user: User) {
    return this.http.post<PartyInterface>(`${environment.api}/party/${id}/participant`, user).pipe(
      map((partyAttrs) => new Party(partyAttrs))
    );
  }

  removeParticipant(id: string, user: User) {
    return this.http.delete<PartyInterface>(`${environment.api}/party/${id}/participant/${user._id}`).pipe(
      map((partyAttrs) => new Party(partyAttrs))
    );
  }

}
