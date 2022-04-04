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
  getSingleItem(id:number){
    return this.http.get(this.apiURL + '/product/' + id,
    this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError))
  }
  addToCart(product:number){
    return this.http.post(this.apiURL+'/cart-product',product,
    this.httpOptions)
    .pipe(retry(1), catchError(this.handleError))    
  }
  getCartData(){
    return this.http.get(this.apiURL + '/cart',
    this.httpOptions)
    .pipe(retry(1), catchError(this.handleError))
  }
  updateCart(id:number,q:number){
    return this.http.patch(
      this.apiURL + '/cart-product/' + id,{'quantity':q},
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError))
  }
  removeItemFromCart(id: any) {
    const headers={
        'Content-Type':'application/json',
        'Api-key':environment.ApiKey,
        'Warehouse-Id':environment.WarehouseId,
        'cartProductId':id
      }
    return this.http.delete(
      this.apiURL + '/cart-product/' + id,
      {headers}
    )
    .pipe(retry(1), catchError(this.handleError))
  }
  getCheckOut() {
    return this.http.get(this.apiURL + '/cart',
    this.httpOptions)
    .pipe(retry(1), catchError(this.handleError))
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.errors.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.statusText}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
