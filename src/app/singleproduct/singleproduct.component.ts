import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { SharedDataService } from '../shared/shared-data.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
  ProductId!:number
  response:any={}
  SingleProductDetails:any={}
  constructor(
    private shared:SharedDataService,
    public productApi:ProductsService, 
    ) { }
  ProductCount:number=1  
  ngOnInit(): void {
    this.shared.currentProductId.subscribe(response=>{this.ProductId=response})
    console.log(this.ProductId)
    this.getSingleProduct()
  }
  getSingleProduct(){
    return this.productApi.getSingleItem(this.ProductId)
    .subscribe((res:{})=>{
      this.response=res
      this.SingleProductDetails = this.response.data
      console.log(this.SingleProductDetails)
    })
  }
  minusCount(count:number){
    this.ProductCount=count
    this.ProductCount--
  }
  plusCount(count:number){
    this.ProductCount=count
    this.ProductCount++
  }

}
