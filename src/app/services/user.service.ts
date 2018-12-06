import { UserAttrs } from './../user/user-attrs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from '../user/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}
  /**
   * Send data to register user in db
   * @param user
   */
  register(user) {
    return this.http.post(`${environment.api}/users`, user);
  }

  /**
   * activate user from register email
   * @param hash
   */
  activate(hash) {
    return this.http.post(`${environment.api}/users/activate`, hash);
  }

  /**
   * Method to get user data by id
   */
  getUser() {
    return this.http.get<UserAttrs>(`${environment.api}/users`).pipe(
     map((userAttrs) => new User(userAttrs))
    );
  }
}
