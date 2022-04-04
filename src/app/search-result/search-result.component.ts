import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductsService } from '../shared/products.service';
import { SharedDataService } from '../shared/shared-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit,OnChanges {
  @Input() search:any=''
  p :number =1
  ppp :number =9
  Offer!:boolean
  total!:string
  response:any={}
  Product:any=[]
  Category:String = 'All'
  ProductId!:number
  Cart:any={}
  Searchterm:any
  constructor(public productApi:ProductsService, 
    private shared:SharedDataService,
    public router: Router,) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.shared.currentSearchTerm.subscribe(res=>{this.Searchterm=res})
    this.loadProducts(this.Searchterm)
  }
  loadProducts(searchTerm:string){
    return this.productApi.Search(searchTerm).subscribe((result:{})=>{
      this.response=result
      this.Product = this.response.data
      this.total = this.response.meta.pagination.total
      console.log(this.Product)
    })
  }
  getProductId(Id:number){
    this.shared.changeProductId(Id)    
    this.router.navigate(['search']);
  }
  addToCart(id:number,priceId:number,quantity:number){
    this.Cart={'productId':id,'priceId':priceId,'quantity':quantity}
    console.log(this.Cart)
    return this.productApi.addToCart(this.Cart).subscribe()
  }
  onChange(event: any){
    this.ppp=event
  }
}
