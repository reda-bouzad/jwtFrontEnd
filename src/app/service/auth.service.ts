import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, of, throwError} from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {User} from "../model/user";
import {Roles} from "../model/roles";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variables :
  private _url= "http://localhost:8036/api/v1/auth/";
  private token: string;

  // Constructor :
  constructor(private http: HttpClient, public router: Router) {}

  // register methode :
  register(firstName: string, lastName: string, email: string, role: Roles, password: string): Observable<string>{
    let payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      password: password
    }
    return this.http.post<string>(this._url + 'register' , payload);
  }

  // get token from the database:
  getTokenDb(email: string): Observable<string>{
    return this.http.get(this._url + 'token/' + email, {responseType: 'text'});
  }

  // check if the user is logged in :
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem(this.token);
    return authToken !== null;
  }


  // login methode :
  login(email: string, password: string): Observable<string>{

    this.getTokenDb(email).subscribe(
      data => localStorage.setItem(this.token, data)
    );

    let payload = {
      email: email,
      password: password
    }

    return this.http.post<string>(this._url + 'authenticate', payload)
  }

  // get token from the local storage
  getTokenLocalStorage(){
    return localStorage.getItem(this.token);
  }






  // Getters and setters :
  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
  }

}
