import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
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
    return this.isValidToken();
  }
  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
