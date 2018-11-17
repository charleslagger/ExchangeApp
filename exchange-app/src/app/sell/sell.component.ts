import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SellService } from './sell.service';
import { AccountService } from '../account/account.service';
import { MyErrorStateMatcher } from './model/input_error_state_matcher';

export interface ProductType {
  value: string;
}

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  //validate field
  nameFormControl = new FormControl('', [Validators.required]);
  pricePerUnitFormControl = new FormControl('', [Validators.required]);
  amountFormControl = new FormControl('', [Validators.required]);
  descriptionFormControl = new FormControl('', [Validators.required]);
  productTypeControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  
  proTypes: ProductType[] = [
    { value: 'SMART_PHONE' },
    { value: 'VEGETABLE' },
    { value: 'CLOTHES' },
    { value: 'CAR' },
  ];

  constructor(private sellService: SellService,
    private accountService: AccountService) { }
  private image;
  private productTypeValue;
  @ViewChild('createProForm') createProForm;
  private productObject = {
    name: '',
    productType: '',
    pricePerUnit: '',
    amount: '',
    description: '',
    currentUser: ''
  };

  ngOnInit() {
    // this.createProduct();
  }
  

  createProduct() {
    console.log('==>>ten sp: ' + this.productObject.name);
    this.productTypeValue = ((JSON.stringify(this.productObject.productType).split(':'))[1].split('"'))[1];
    // this.createInProgress = true;
    return this.accountService.getCurrentUserPhoto().then(coverImage => {
      return this.accountService.getCurrentUserId().then(currentUserId => {
        return this.sellService.createProduct(this.productObject.name,
          this.productTypeValue, this.productObject.pricePerUnit,
          this.productObject.amount, this.image,
          this.productObject.description, 'CART_STATUS', currentUserId, coverImage);
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
