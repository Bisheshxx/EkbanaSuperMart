import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURL=environment.apiURL
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Api-key':environment.ApiKey,
      'Warehouse-Id':environment.WarehouseId
    }),
  };
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get(
      this.apiURL+'/product',
      this.httpOptions
    )
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
