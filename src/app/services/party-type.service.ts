import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PartyTypeService {

  private partyTypes = [];
  private apiUrl = `http://localhost:8080/api/party-type`;

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  create(partyTypeForm) {

    const formData = new FormData();
    formData.append('name', partyTypeForm.data.name);
    formData.append('desc', partyTypeForm.data.desc);
    formData.append('icon', partyTypeForm.icon, partyTypeForm.icon.name);

    return this.http.post(this.apiUrl, formData);
  }

  getPartyTypesLists() {
    return this.http.get(this.apiUrl);
  }
}
