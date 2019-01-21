import { UserAttrs } from './../user/user-attrs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from '../user/user';
import {Observable} from 'rxjs';

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

  /** Method to get user data by id */
  getUser(): Observable<User> {
    return this.http.get<UserAttrs>(`${environment.api}/users`).pipe(
     map((userAttrs) => new User(userAttrs))
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<UserAttrs[]>(`${environment.api}/users/all`).pipe(
      map((data) => {
        return data.map((userAttrs: UserAttrs) => new User(userAttrs));
      })
    );
  }

  update(formData) {
    return this.http.put<UserAttrs>(`${environment.api}/users`, formData).pipe(
      map((userAttrs) => new User(userAttrs))
    );
  }

  updateAvatar(data) {
    const formData = new FormData();
    formData.append('avatar', data.avatar);
    return this.http.post(`${environment.api}/update-avatar`, formData);
  }
}
