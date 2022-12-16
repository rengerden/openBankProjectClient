import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const ACCESS_TOKEN = environment.accessToken;
const REFRESH_TOKEN = environment.refreshToken;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  public setAccessToken(accessToken: string) {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.sessionStorage.setItem(ACCESS_TOKEN, accessToken);
  }

  public setRefreshToken(refreshToken: string) {
    window.sessionStorage.removeItem(REFRESH_TOKEN);
    window.sessionStorage.setItem(REFRESH_TOKEN,refreshToken);
  }

  public getAccessToken(): string {
    return window.sessionStorage.getItem(ACCESS_TOKEN)!;
  }

  public getRefreshToken(): string{
    return window.sessionStorage.getItem(REFRESH_TOKEN)!;
  }

  public logOut() {
    window.sessionStorage.removeItem(ACCESS_TOKEN);
    window.sessionStorage.removeItem(REFRESH_TOKEN);
    sessionStorage.clear
  }

  public isLogged(): boolean {
  return this.getAccessToken().length > 0 ? true : false;
  }

}
