import { Injectable } from '@angular/core';
import { AuthService } from '../../features/auth/services/auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    const roles = route.data['roles'] as Array<string> || [];
    const userRoles = this.authService.getRoles();

    if (roles.length === 0 || userRoles.some(role => roles.includes(role))) {
      return true;
    } else {
      this.router.navigate(['/access-denied']);
      return false;
    }
  }
}
