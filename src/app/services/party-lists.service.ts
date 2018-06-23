import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PartyListsService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  partyEvents = [
    {
      id: 1,
      name: 'Domówka',
      desc: 'ciekawa impreza',
      latitude: 50.1826663,
      longitude: 19.1444923
    },
    {
      id: 2,
      name: 'Impreza muzyczna',
      desc: 'tylko Bach',
      latitude: 50.2548661,
      longitude: 19.0350241
    }
  ];

  getPartyLists() {
    return this.partyEvents;
  }

  create(party) {
    return this.http.post(`http://localhost:8080/api/party`, JSON.stringify(party), {headers: this.headers})
    .subscribe(data => console.log(data));
  }

  constructor(private http: HttpClient) { }


}
