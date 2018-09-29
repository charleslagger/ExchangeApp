import { Component, OnInit, ViewChild } from '@angular/core';
import { SellService } from './sell.service';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor( private sellService: SellService,
              private accountService: AccountService) { }
  // private createInProgress = false;
  @ViewChild('createProForm') createProForm;
  private productObject = {
    name: '',
    productType: '',
    pricePerUnit: '',
    amount: '',
    imageBase64Encode: '',
    description : '',
    currentUser: ''
  };

  ngOnInit() {
    // this.createProduct();
  }

  createProduct() {
    // this.createInProgress = true;
    return this.accountService.getCurrentUserId().then((currentUserId) => {
      return this.sellService.createProduct(this.productObject.name,
        this.productObject.productType, this.productObject.pricePerUnit,
        this.productObject.amount, this.productObject.imageBase64Encode,
        this.productObject.description, ' ', currentUserId)
      .then(() => {
        // this.createInProgress = false;
      });
    });
  }
}
