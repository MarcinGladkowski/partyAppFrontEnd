import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PartyTypeService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  creater(partyType) {
    return this.http.post(`http://localhost:8080/api/users`, partyType, {headers: this.headers});
  }

}
