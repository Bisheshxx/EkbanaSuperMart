import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  p :number =1
  ppp :number =9
  Offer!:boolean
  total!:string
  response:any={}
  Product:any={}
  term!: string;
  Category:String = 'All'
  
  constructor(public productApi:ProductsService) { }

  ngOnInit(): void {
    this.loadProducts()
    // console.log("loadproducts",this.Product)
  }
  onChange(event: any){
    this.ppp=event
  }
  CategorySelect(keyword:string){
    this.Category=keyword
  }
  loadProducts(){
    return this.productApi.getProducts().subscribe((result:{})=>{
      this.response=result
      this.Product = this.response.data
      this.total = this.Product.meta.pagination.total
      console.log('result',this.Product)
    })
  }
}
