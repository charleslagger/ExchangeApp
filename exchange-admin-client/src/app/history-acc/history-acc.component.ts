import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { HistoryService } from '../history/history.service';
import { Observable } from 'rxjs';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-history-acc',
  templateUrl: './history-acc.component.html',
  styleUrls: ['./history-acc.component.css']
})
export class HistoryAccComponent implements OnInit {
  private totalTransactions;
  private ownerId;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private historyService: HistoryService,
              private accountService: AccountService
              ) {
    this.ownerId = 'resource:uet.khoenguyen.exchange.Collector#' + data.email;
    console.log("==>>Dialog param: data: " + data.email);
  }

  ngOnInit() {
    this.totalTransactions = this.getAllTransactions();
  }

  getAllTransactions(){
    return this.historyService.getAllTransactions();
  }
}
