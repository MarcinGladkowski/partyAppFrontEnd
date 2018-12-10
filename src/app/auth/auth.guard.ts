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

      let loggedIn = false;

      this.authService.isLoggedIn().subscribe(data => {
        if (!data) { this.router.navigate(['/']); }
        loggedIn = data;
      });

      return loggedIn;
  }
}
