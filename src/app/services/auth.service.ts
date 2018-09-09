import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
    //  this.loggedIn.next(!!localStorage.getItem('authToken'));
     this.loggedIn.next(true);
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private baseApiUrl = 'http://localhost:8080/api/';
  // change loggedIn to a subject
  public loggedIn = new Subject<boolean>();

  // make isLoggedIn public readonly
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

   login(user) {
    return this.http.post(`${this.baseApiUrl}auth`, user, {headers: this.headers})
      .map((data: any) => {
        if (data && data.auth) {
          localStorage.setItem('auth', JSON.stringify(data));
          this.loggedIn.next(true);
        }
        return data;
      });
  }

  logout() {
    localStorage.removeItem('auth');
    this.loggedIn.next(false);
  }

  checkIsUserLogin() {
    return this.http.post(`${this.baseApiUrl}auth/check`, {headers: this.headers})
    .subscribe((data: any) => {
      if (data && data.auth) {
        localStorage.setItem('auth', JSON.stringify(data));
        this.loggedIn.next(true);
      }},
      (error) => {
        localStorage.setItem('auth', JSON.stringify({auth: false, token: null}));
        this.loggedIn.next(false);
      }
  );
  }

}
