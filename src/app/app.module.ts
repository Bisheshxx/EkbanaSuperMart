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
const routes:Routes=[
  {path:'', component:IndexComponent},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'faq', component:FaqComponent},
  {path:'offers', component:OffersComponent},
  {path:'registered', component:RegisteredComponent},
  {path:'contact', component:ContactComponent}
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
    ItemViewsComponent
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
