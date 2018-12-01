import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { HistoryAccComponent } from '../history-acc/history-acc.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService,
    public dialog: MatDialog) { }

  private listUsers;

  ngOnInit() {
    console.log("===>> oninit: " + this.getListUsers());
    this.listUsers = this.getListUsers();
  }

  getListUsers() {
    return this.accountService.getListUsers();
  }

  showHistory(user) {
    this.dialog.open(HistoryAccComponent, {
      data: user
    });
  }

}
