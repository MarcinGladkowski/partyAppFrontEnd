import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {PartyInviteInterface} from '../party/party-invite/party-intive-interface';
import {map} from 'rxjs/operators';
import {PartyInvite} from '../party/party-invite/party-invite';

@Injectable({
  providedIn: 'root'
})
export class PartyInvitesService {

  constructor(private http: HttpClient) { }

  create(party: string, userInvited: string) {
    return this.http.post(`${environment.api}/party-invite`, {party, userInvited}).pipe(
      map(attrs => new PartyInvite(attrs))
    );
  }

  getPartyInvites(partyId: string): Observable<PartyInviteInterface[]> {
    return this.http.get<PartyInviteInterface[]>(`${environment.api}/party-invite/${partyId}`).pipe(
      map((data) => {
        return data.map((inviteAttrs: PartyInviteInterface) => new PartyInvite(inviteAttrs));
      })
    );
  }
}
