import {Injectable, NgModule} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {environment} from "../../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@NgModule({
  imports: [HttpClientModule]
})

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath: string = environment.apiUrl + 'auth/login/';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private cookies: CookieService) { }

  login(data: any): Observable<any> {
    return this.http.post(this.loginPath, data);
  }

  logout(): void {
    this.cookies.delete('auth');
  }

  saveToken(token: string): void {
    this.cookies.set('auth', token);
  }

  getToken(): string {
    return this.cookies.get('auth');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getRoles(): string[];
  getRoles(token: string): string[];

  getRoles(token?: string): string[] {
    if (!token) {
      token = this.getToken();
    }

    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken.roles;
  }
}
