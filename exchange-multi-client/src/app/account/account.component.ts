import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { ModifyProductComponent } from '../modify-product/modify-product.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService,
    public dialog: MatDialog) { }

  private currentUser;
  private listProductBought;
  private listProductSell;

  ngOnInit() {
    this.currentUser = this.getCurrentUser();
    this.listProductBought = this.getListProductBought();
      // .then( (result) => {
      //   console.log('==>' + JSON.stringify(result));
      // });
    this.listProductSell = this.getListProductSell();
  }

  getListProductBought() {
    return this.accountService.getCurrentUserId()
      .then((currentUserId) => {
        console.log('==>>current user id: ' + currentUserId);
        return this.accountService.getMyProductBought(currentUserId);
      });
  }

  getListProductSell() {
    return this.accountService.getCurrentUserId()
      .then((currentUserId) => {
        return this.accountService.getMyProductSell(currentUserId);
      });
  }

  getCurrentUser() {
    return this.accountService.getCurrentUser();
  }

  deleteProductById(productId) {
    return this.accountService.deleteProductById(productId).then((result) => {
      console.log("==>>Delete product success.");
    });
  }

  modifyProductDialog(product) {
    const dialogRef = this.dialog.open(ModifyProductComponent, {
      data: product
    });
  }

}
