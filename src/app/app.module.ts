import { NgxPaginationModule } from 'ngx-pagination';
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
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { OffersComponent } from './offers/offers.component';
import { RegisteredComponent } from './registered/registered.component';
import { registerLocaleData } from '@angular/common';
import { ItemViewsComponent } from './item-views/item-views.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { SingleproductComponent } from './singleproduct/singleproduct.component'
import { AuthInterceptor } from './shared/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { Router } from 'express';
import { ProductsComponent } from './products/products.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductfilterPipe } from './pipes/productfilter.pipe';
import { SeachpippePipe } from './shared/seachpippe.pipe';
import { SearchpipePipe } from './pipes/search/searchpipe.pipe';
import { SearchResultComponent } from './search-result/search-result.component';

const routes:Routes=[
  {path:'', component:IndexComponent},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'faq', component:FaqComponent},
  {path:'offers', component:OffersComponent},
  {path:'register', component:RegisteredComponent},
  {path:'contact', component:ContactComponent},
  {path:'products', component:ProductsComponent},
  {path:'single', component:SingleproductComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'profile', component:ProfileComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CheckoutComponent,
    ContactComponent,
    FaqComponent,
    OffersComponent,
    RegisteredComponent,
    ItemViewsComponent,
    SingleproductComponent,
    ProfileComponent,
    ProductsComponent,
    ProductfilterPipe,
    SeachpippePipe,
    SearchpipePipe,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    NgImageSliderModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ],
  exports:[RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
