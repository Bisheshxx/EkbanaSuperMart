import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  apiURL=environment.apiURL
  auth=environment.auth
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    }),
  };
  createUsers(user:any):Observable<User>{
    return this.http
    .post<User>(
    this.apiURL+ this.auth + '/signup',
    JSON.stringify(user),
    this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }
  loginUser(user:any):Observable<User>{
    return this.http
    .post<User>(
    this.apiURL + this.auth + '/login',
    user,
    this.httpOptions)
    .pipe(retry(1), catchError(this.handleError))
  }
  getUser(user:any){
    return this.http
    .get<User>(
      this.apiURL+'/profile/show',
      user)
      .pipe(retry(1), catchError(this.handleError))
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
