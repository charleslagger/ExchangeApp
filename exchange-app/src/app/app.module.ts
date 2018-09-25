import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { MessageComponent } from './message/message.component';
import { CartComponent } from './cart/cart.component';
import { DaoComponent } from './dao/dao.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    MessageComponent,
    CartComponent,
    DaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
