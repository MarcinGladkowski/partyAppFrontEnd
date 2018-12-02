import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
    //  this.loggedIn.next(!!localStorage.getItem('authToken'));
     this.loggedIn.next(true);
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Cache-Control': 'max-age=5'
  });

  /** change loggedIn to a subject */
  public loggedIn = new Subject<boolean>();

  /** make isLoggedIn public readonly */
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

   login(user) {
    return this.http.post(`${environment.api}/auth`, user, {headers: this.headers}).pipe(
      map((data: any) => {
        if (data && data.auth) {
          localStorage.setItem('auth', JSON.stringify(data));
          this.loggedIn.next(true);
        }
        return data;
      })
    );
  }

  logout() {
    localStorage.removeItem('auth');
    this.loggedIn.next(false);
  }

  checkIsUserLogin() {
    return this.http.post(`${environment.api}/auth/check`, null, {headers: this.headers})
    .subscribe((data: any) => {
      if (data && data.auth) {
        localStorage.setItem('auth', JSON.stringify(data));
        this.loggedIn.next(true);
      }},
      (err) => {
        localStorage.setItem('auth', JSON.stringify({auth: false, token: null}));
        this.loggedIn.next(false);
      }
    );
  }

}
