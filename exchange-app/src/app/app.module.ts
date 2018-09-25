import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { MessageComponent } from './message/message.component';
import { CartComponent } from './cart/cart.component';
import { DaoComponent } from './dao/dao.component';
import { LoginComponent } from './login/login.component';
import { SellComponent } from './sell/sell.component';
import { BalanceComponent } from './balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    MessageComponent,
    CartComponent,
    DaoComponent,
    LoginComponent,
    SellComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
