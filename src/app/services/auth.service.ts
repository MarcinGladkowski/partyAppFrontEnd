import {map} from 'rxjs/operators';
import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Subject, Observable, BehaviorSubject} from 'rxjs';
import {User} from '../user/user';
import {UserService} from './user.service';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) {}

  /** change loggedIn to a subject */
  loggedIn = new BehaviorSubject<boolean>(false);
  /** user profile */
  user = new BehaviorSubject<any>(false);
  /** make isLoggedIn public readonly */
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  getProfile(): Observable<any> {
    return this.user.asObservable();
  }

  login(loginData) {
    return this.http.post(`${environment.api}/auth`, loginData).pipe(
      map((data: any) => {
        if (data && data.auth) {
          localStorage.setItem('auth', JSON.stringify(data));
          this.loggedIn.next(true);
          this.userService.getUser().subscribe((user: User) => {
            this.user.next(user);
          });
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
    return this.http.post(`${environment.api}/auth/check`, null)
      .subscribe((data: any) => {
          if (data && data.auth) {
            localStorage.setItem('auth', JSON.stringify(data));
            this.loggedIn.next(true);
          }
        },
        (err) => {
          localStorage.setItem('auth', JSON.stringify({auth: false, token: null}));
          this.loggedIn.next(false);
        }
      );
  }

  updatePassword(data): Observable<User> {
    return this.http.post(`${environment.api}/auth/update-password`, data).pipe(
      map((userAttrs) => new User(userAttrs))
    );
  }
}
