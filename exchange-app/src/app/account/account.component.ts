import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  private currentUser;

  private myProducts;
  ngOnInit() {
    this.currentUser = this.getCurrentUser();
    this.myProducts = this.getMyProducts();
  }

  getMyProducts() {
    return this.accountService.getMyProducts();
  }

  getCurrentUser() {
    return this.accountService.getCurrentUser();
  }

}
