import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
