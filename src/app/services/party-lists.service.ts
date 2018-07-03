import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class PartyListsService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getPartyLists() {
    return this.http.get(`http://localhost:8080/api/party`);
  }

  create(party) {
    return this.http.post(`http://localhost:8080/api/party`, JSON.stringify(party), {headers: this.headers})
    .subscribe(data => console.log(data));
  }

  constructor(private http: HttpClient) { }


}
