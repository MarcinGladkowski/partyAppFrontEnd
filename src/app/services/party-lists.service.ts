import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';

@Injectable()
export class PartyListsService {

  public parties$: Subject<any> = new Subject();
  private partiesList = [];

  constructor(private http: HttpClient) {
    this.getParties();
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

}
