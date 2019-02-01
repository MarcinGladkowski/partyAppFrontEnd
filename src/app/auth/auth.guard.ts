import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const auth = JSON.parse(localStorage.getItem('auth'));

    if (auth && auth.token) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
