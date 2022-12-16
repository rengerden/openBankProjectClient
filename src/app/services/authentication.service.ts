import { Usuario } from './../interfaces/user';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from './../interfaces/auth';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl: string = environment.authApiUrl;
  private _usuario!: string;
  private user!: Usuario;

  private isValid = false;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  get usuario() {
    return this._usuario;
  }

  getLogin(loginRequest: LoginRequest) {
    const headers = { 'content-type': 'application/json' };
    const url = `${this.baseUrl}/auth/login`;
    return this.http
      .post<LoginResponse>(url, loginRequest, { headers: headers })
      .pipe(
        tap((resp) => {
          if (resp.status) {
            this.tokenService.setAccessToken(resp.accessToken);
            this.tokenService.setRefreshToken(resp.refreshToken!);
            this._usuario = resp.userName;
          }
        }),
        map((resp) => resp.status),
        catchError((err) => of(false))
      );
  }

  getUserInfo(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/token/validate`;
    return this.http.get<Usuario>(url).pipe(
      map(resp => {
        if(resp.userName != null){
          this.user = resp;
          this.isValid = true;
        }
        return this.isValid;
      }),
      catchError((err) => of(false))
      )
  }
}
