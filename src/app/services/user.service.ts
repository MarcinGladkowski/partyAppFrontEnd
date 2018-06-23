import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  register(user) {
    return this.http.post(`http://localhost:8080/api/users`, JSON.stringify(user), {headers: this.headers});
  }
}
