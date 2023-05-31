import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8036/api/v1/auth/authenticate';
  private tokenUrl = 'http://localhost:8036/api/v1/auth/token';
  private authTokenKey = 'authToken';
  private isAuthenticatedKey = 'isAuthenticated';

  constructor(private http: HttpClient, private router: Router) {}

  getToken(email: string): Observable<string> {
    return this.http.get<string>(`${this.tokenUrl}/${email}`);
  }

  storeToken(email: string): Observable<any> {
    return this.getToken(email).pipe(
      tap((data: string) => {
        localStorage.setItem(this.authTokenKey, data); // Store the token in localStorage
      })
    );
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.isAuthenticatedKey) === 'true';
  }

  login(email: string, password: string): Observable<any> {
    console.log(this.isAuthenticated());
    if (this.isAuthenticated()) {
      this.router.navigate(['/success']); // Navigate to the success page if already authenticated
      return of(null); // Return an empty Observable
    }

    const loginData = {
      email: email,
      password: password
    };

    return this.storeToken(email).pipe(
      switchMap(() => {
        const authToken = localStorage.getItem(this.authTokenKey);
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${authToken}`
        });
        return this.http.post(this.loginUrl, loginData, { headers: headers });
      }),
      tap(() => {
        // Set isAuthenticated to true in localStorage
        localStorage.setItem(this.isAuthenticatedKey, 'true');
        this.router.navigate(['/success']); // Navigate to the success page
      })
    );
  }
}
