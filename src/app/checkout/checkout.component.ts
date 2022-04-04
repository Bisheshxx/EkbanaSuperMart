import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../shared/products.service';
import { SharedDataService } from '../shared/shared-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  response:any={}
  CartDetails:any=[]
  CartSize!:number
  ProductCount!:number
  count: number=this.CartDetails.quantity;
  constructor(public productApi:ProductsService,private shared:SharedDataService,public router: Router,) { }

  ngOnInit(): void {
    this.getCartData()
  }
  getCartData(){
    return this.productApi.getCartData().subscribe((res:{})=>{      
      this.response = res
      this.CartDetails = this.response.data.cartProducts
      this.CartSize = this.CartDetails.length
      console.log(this.CartDetails)
      for(let i = 0;i < this.CartSize; i++){
        return this.CartDetails.price += this.CartDetails.price
      }
      console.log(this.CartDetails.price)
    })
  }
  calculateTotal(newpprice:number,oldpprice:number,quantity:number){
    let CartPrice
    let total
    return CartPrice = (newpprice != 0) ? newpprice * quantity : oldpprice * quantity
  }
  getProductId(Id:number){
    this.shared.changeProductId(Id)
    this.router.navigate(['single']);
  }
  changeCounter(id:number,quantity:number,operators:string){
    if(operators === 'minus'){
      return this.productApi.updateCart(id,quantity-1).subscribe(()=>{
        location.reload();
      })
    }
    else if(operators === 'plus'){
      return this.productApi.updateCart(id,quantity+1).subscribe(()=>{
        location.reload();
      })
    }
  }

}
