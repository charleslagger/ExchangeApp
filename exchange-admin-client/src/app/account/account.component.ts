import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  private listUsers;

  ngOnInit() {
    console.log("===>> oninit: " + this.getListUsers());
    this.listUsers = this.getListUsers();
  }

  getListUsers() {
    // console.log("==>>Account list: " + this.accountService.getListUsers());
    return this.accountService.getListUsers();
  }

}
