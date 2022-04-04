import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { SharedDataService } from '../shared/shared-data.service';
import { Router } from '@angular/router';
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
  Product:any=[]
  Category:String = 'All'
  ProductId!:number
  
  constructor(
    public productApi:ProductsService, 
    private shared:SharedDataService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.loadProducts()
  }
  onChange(event: any){
    this.ppp=event
  }
  CategorySelect(keyword:string){
    this.Category=keyword
  }
  getProductId(Id:number){
    this.shared.changeProductId(Id)
    this.router.navigate(['single']);
  }
  loadProducts(){
    return this.productApi.getProducts().subscribe((result:{})=>{
      this.response=result
      this.Product = this.response.data
      console.log(this.Product)
      this.total = this.response.meta.pagination.total
    })
  }
}

//need to create child components and send Product,p,ppp,total and CategorySelect keyword
