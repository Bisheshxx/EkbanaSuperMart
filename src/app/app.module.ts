import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './beverages/beverages.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { GourmetComponent } from './gourmet/gourmet.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HouseholdComponent } from './household/household.component';
import { OffersComponent } from './offers/offers.component';
import { PackagedfoodsComponent } from './packagedfoods/packagedfoods.component';
import { PersonalcareComponent } from './personalcare/personalcare.component';
import { ProductsComponent } from './products/products.component';
import { RegisteredComponent } from './registered/registered.component';
import { registerLocaleData } from '@angular/common';
const routes:Routes=[
  {path:'', component:IndexComponent},
  {path:'about', component:AboutComponent},
  {path:'faq', component:FaqComponent},
  {path:'gourmet', component:GourmetComponent},
  {path:'groceries', component:GroceriesComponent},
  {path:'household', component:HouseholdComponent},
  {path:'offers', component:OffersComponent},
  {path:'packagedfoods', component:PackagedfoodsComponent},
  {path:'personalcare', component:PersonalcareComponent},
  {path:'product', component:ProductsComponent},
  {path:'registered', component:RegisteredComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BeveragesComponent,
    CheckoutComponent,
    ContactComponent,
    FaqComponent,
    GourmetComponent,
    GroceriesComponent,
    HouseholdComponent,
    OffersComponent,
    PackagedfoodsComponent,
    PersonalcareComponent,
    ProductsComponent,
    RegisteredComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
