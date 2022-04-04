import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  ProductId!:number
  private ProductIdSource=new BehaviorSubject<number>(116)
  currentProductId = this.ProductIdSource.asObservable();
  constructor() { }  
  changeProductId(Id:number){
    this.ProductIdSource.next(Id)
  }
}
