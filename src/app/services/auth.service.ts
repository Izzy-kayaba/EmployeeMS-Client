import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl: string = "http://localhost:3003"

  constructor(private http: HttpClient, private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem("token", token)
  }

  getToken(): string | null {
    return localStorage.getItem("token")
  }

  isLoggedIn() {
    return this.getToken() !== null
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(["login"])
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }

  login({ email, password }: any): Observable<any> {
    return this.http.post<{ token: string, redirectUrl: string }>(`${this.serverUrl}/users/login`, { email, password })
      .pipe(
        tap(response => {
          this.setToken(response.token);
        })
      );
  }

}
