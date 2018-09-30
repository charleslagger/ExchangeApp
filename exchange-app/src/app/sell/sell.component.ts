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
  private image;
  @ViewChild('createProForm') createProForm;
  private productObject = {
    name: '',
    productType: '',
    pricePerUnit: '',
    amount: '',
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
        this.productObject.amount, this.image,
        this.productObject.description, 'CART_STATUS', currentUserId)
      .then(() => {
        // this.createInProgress = false;
      });
    });
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.image = myReader.result;
      // console.log('==>' + this.image);
    };

    myReader.readAsDataURL(file);
  }
}
