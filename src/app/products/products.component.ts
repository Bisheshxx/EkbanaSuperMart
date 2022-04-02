import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Offer!:boolean
  Product:any={}
  constructor(public productApi:ProductsService) { }

  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts(){
    return this.productApi.getProducts().subscribe((data:{})=>{
      this.Product=data
      console.log(this.Product.data)
    })
  }


}
