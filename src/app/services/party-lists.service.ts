import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/startWith';

@Injectable()
export class PartyListsService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.getParties();
  }

  private apiUrl = `http://localhost:8080/api/party`;
  partyEvents = [];

  private createParty(partyAttrs) {
    return this.http.post(this.apiUrl, partyAttrs);
  }

  private updateParty(partyAttrs) {
    // @TODO implement update
  }

  saveParty(partyAttrs) {
    if (partyAttrs.id) { return this.updateParty(partyAttrs); }
    return this.createParty(partyAttrs);
  }

  getParties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
