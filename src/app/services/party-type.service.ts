import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PartyTypeService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  headersFile = new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  });

  create(partyType) {
    return this.http.post(`http://localhost:8080/api/party-type`, partyType, {headers: this.headers});
  }

  upload(file: any) {
    const input = new FormData();
    input.append('file', file);

    return this.http.post(`http://localhost:8080/api/party-type/upload`, input, {headers: this.headersFile} );
  }

}
