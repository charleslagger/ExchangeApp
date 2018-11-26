import { Component, OnInit, ViewChild } from '@angular/core';
import { BalanceService } from './balance.service';
import { AccountService } from '../account/account.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private balanceService: BalanceService,
      private accountService: AccountService,
      private formBuilder: FormBuilder) { }
  increaseBalanceForm: FormGroup;
  @ViewChild('balanceForm') balanceForm;
  private amountMoney = {
    accountBalance: ''
  };

  ngOnInit() {
    this.increaseBalanceForm = this.formBuilder.group({
      accountBalance: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.increaseBalanceForm.controls; }

  increaseBalance() {
    return this.accountService.getCurrentUserId().then((currentUserId) => {
      return this.balanceService.increaseBalance(this.amountMoney.accountBalance, currentUserId)
        .then(() =>{
          console.log("==>Nạp tiền thành công");
        });
    });
  }


}
