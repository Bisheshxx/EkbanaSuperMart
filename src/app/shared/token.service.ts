import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _loggedInSource= new BehaviorSubject<boolean>(false);
  loggedIn= this._loggedInSource.asObservable();
  
  private issuer={
    login:'https://uat.ordering-dalle.ekbana.net/api/v4/auth/login',
    register:'https://uat.ordering-dalle.ekbana.net/api/v4/auth/register'
  }
  constructor() { }
  handleData(token:any){
    localStorage.setItem('access_token',token)
  }
  getToken(){
    return localStorage.getItem('access_token')
  }
  isValidToken(){
    const token = this.getToken()
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.issuer).indexOf(payload.iss)>-1
        ?true
        :false
      }
      else{
        return false
      }
    }
  }
  payload(token:any){
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }
  isLoggedIn() {
    if(this.isValidToken()){
      this._loggedInSource.next(true)
    }
    else{
      this._loggedInSource.next(false)
    }
  }
  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
