import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PartyTypeService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  create(partyTypeForm) {

    const formData = new FormData();
    formData.append('name', partyTypeForm.data.name);
    formData.append('desc', partyTypeForm.data.desc);
    formData.append('path', partyTypeForm.data.path);
    formData.append('icon', partyTypeForm.icon, partyTypeForm.icon.name);

    return this.http.post(`http://localhost:8080/api/party-type`, formData);
  }

  upload(file: any) {
    const formData = new FormData();
    formData.append('icon', file, file.name);

    return this.http.post(`http://localhost:8080/api/party-type/upload`, formData);
  }
}
