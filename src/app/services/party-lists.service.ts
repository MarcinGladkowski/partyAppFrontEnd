import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/startWith';

@Injectable()
export class PartyListsService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.getPartyLists();
  }

  private apiUrl = `http://localhost:8080/api/party`;
  partyEvents = [];

  partyStream$ = new Subject();

  getPartyStream() {
    return this.partyStream$.startWith(this.partyEvents);
  }

   getPartyLists() {
    return this.http.get(this.apiUrl).subscribe((data: any) => {
      const parties = data.parties;
      console.log(`otrzymane z api`, data.parties);
      this.partyEvents = parties;
      this.partyStream$.next(this.partyEvents);
    });
  }

  create(party) {
    return this.http.post(this.apiUrl, JSON.stringify(party), {headers: this.headers})
    .subscribe((response: any) => {
      console.log('dodano do bazy: ', response.data);
      this.partyEvents.push(response.data);
      this.partyStream$.next(this.partyEvents);
    });
  }

}
