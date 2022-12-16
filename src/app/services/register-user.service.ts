import { UserRequest } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  private baseUrl: string = environment.userApiUrl;
  constructor(private http: HttpClient) { }

  private user = new BehaviorSubject<UserRequest>({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        passwordConfirm: '',
        termsAndConditions: false,
        agreement: false,

  });

  user$ = this.user.asObservable();

addDataToUser(user: UserRequest){
  this.user.next(user);
}

createUser(user: UserRequest){
  this.http.post(this.baseUrl,user).subscribe(
    (resp)=> console.log(resp)
  )
}
}
