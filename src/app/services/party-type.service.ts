import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PartyTypeService {

  private partyTypes = [];

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  create(partyTypeForm) {

    const formData = new FormData();
    formData.append('name', partyTypeForm.data.name);
    formData.append('desc', partyTypeForm.data.desc);
    formData.append('icon', partyTypeForm.icon, partyTypeForm.icon.name);

    return this.http.post(`${environment.api}/party-type`, formData);
  }

  getPartyTypesLists() {
    return this.http.get(`${environment.api}/party-type`);
  }
}
