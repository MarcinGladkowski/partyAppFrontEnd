import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
    //  this.loggedIn.next(!!localStorage.getItem('authToken'));
    //  this.loggedIn.next(true);
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private baseApiUrl = 'http://localhost:8080/api/';
  // change loggedIn to a subject
  public loggedIn = new Subject<boolean>();

  // make isLoggedIn public readonly
  get isLoggedIn() {
    return this.loggedIn;
  }

  login(user) {
    return this.http.post(`${this.baseApiUrl}auth`, user, {headers: this.headers})
      .subscribe((data: any) => {

        if (data && data.auth) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('authToken', JSON.stringify(data.token));
          // set loggedIn
          this.loggedIn.next(true);
        }

        return data;

      });
  }

}
