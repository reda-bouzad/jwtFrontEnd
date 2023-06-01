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
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {}; // I will probably delete this later

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

  // login methode :


  // login methode :





  // Getters and setters :
  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
  }

}
