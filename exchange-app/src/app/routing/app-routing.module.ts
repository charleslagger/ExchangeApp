import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AccountComponent } from '../account/account.component';
import { MessageComponent } from '../message/message.component';
import { DaoComponent } from '../dao/dao.component';
import { CartComponent } from '../cart/cart.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '?loggedIn=true', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'message', component: MessageComponent },
  { path: 'dao', component: DaoComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
