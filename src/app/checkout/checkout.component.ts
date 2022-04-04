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
  CheckOutDetails:any={}
  CartSize!:number
  ProductCount!:number
  count: number=this.CartDetails.quantity;
  responsecheckout:any ={};
  constructor(public productApi:ProductsService,private shared:SharedDataService,public router: Router,) { }

  ngOnInit(): void {
    this.getCartData()
    this.getCheckoutData()
  }
  getCartData(){
    return this.productApi.getCartData().subscribe((res:{})=>{      
      this.response = res
      this.CartDetails = this.response.data.cartProducts
      this.CartSize = this.CartDetails.length
    })
  }
  calculateTotal(newpprice:number,oldpprice:number,quantity:number){
    let CartPrice
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
  deleteCart(id:any){
    console.log(id)
    return this.productApi.removeItemFromCart(id).subscribe(()=>{
      this.ngOnInit
    })
  }
  getCheckoutData(){
    return this.productApi.getCheckOut().subscribe((res:{})=>{
      this.responsecheckout=res
      this.CheckOutDetails = this.responsecheckout.data
      console.log('CheckoutDetails',this.CheckOutDetails)
    })
  }

}
