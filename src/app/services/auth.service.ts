import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(`http://localhost:8080/api/auth`, user)
      .subscribe((data: any) => {

        if (data) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('authToken', JSON.stringify(data.token));
        }

        return data;

      });
  }

}
