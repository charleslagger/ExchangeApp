import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AccountService } from '../account/account.service';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../sell/model/input_error_state_matcher';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private accountService: AccountService) {
    console.log("==>>Dialog param: productId: " + data.productId);
  }

  pricePerUnitFormControl = new FormControl('', [Validators.required]);
  amountFormControl = new FormControl('', [Validators.required]);
  descriptionFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  private image;
  @ViewChild('modProForm') modProForm;
  private productObject = {
    pricePerUnit: '',
    amount: '',
    description: ''
  };

  ngOnInit() {
  }

  modProduct(){
    this.data.description = this.productObject.description;
    this.data.amount = this.productObject.amount;
    this.data.pricePerUnit = this.productObject.pricePerUnit;
    this.data.imageBase64Encode = this.image;
    return this.accountService.modProduct(this.data);
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
