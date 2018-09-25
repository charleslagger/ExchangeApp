import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  private myPenguins;
  ngOnInit() {
    this.myPenguins = this.getMyPenguins();
  }

  getMyPenguins() {
    return this.accountService.getMyPenguins();
  }

}
