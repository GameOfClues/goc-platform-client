import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../../shared/interfaces/User";
import {Faq} from "../../../shared/interfaces/Faq";

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  private usersPath: string = environment.apiUrl + 'users/';
  private faqPath: string = environment.apiUrl + 'landing/faq/';
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

  getFaq(): Observable<Array<Faq>> {
    return this.http.get<Array<Faq>>(this.faqPath);
  }

  getFaqById(id: string): Observable<Faq> {
    console.log(id)
    return this.http.get<Faq>(this.faqPath + id);
  }

  createFaq(data: Faq): Observable<boolean> {
    return this.http.post<boolean>(this.faqPath, data);
  }

  updateFaq(id: string, data: Faq): Observable<boolean> {
    return this.http.put<boolean>(this.faqPath + id, data);
  }

  deleteFaq(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.faqPath + id);
  }
}
