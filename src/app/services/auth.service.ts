import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  login(user) {
    return this.http.post(`http://localhost:8080/api/auth`, user, { headers: this.headers })
      .subscribe((data) => {

        if (data) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('authToken', JSON.stringify(user));
        }

        return data;

      });
  }

}
