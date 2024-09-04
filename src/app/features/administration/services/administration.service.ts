import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../../shared/interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  private usersPath: string = environment.apiUrl + 'users/';
  private authPath: string = environment.apiUrl + 'auth/register/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.usersPath);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.usersPath + 'profile');
  }

  createUser(data: User): Observable<boolean> {
    return this.http.post<boolean>(this.authPath, data);
  }
}
