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
  private createInProgress = false;
  @ViewChild('createProForm') createPenForm;
  private penguinObject = {
    name: '',
    description : ''
  };

  ngOnInit() {
    this.createPenguin();
  }

  createPenguin() {
    this.createInProgress = true;
    return this.accountService.getCurrentUserId().then((currentUserId) => {
      return this.sellService.createPenguin(this.penguinObject.name, this.penguinObject.description, currentUserId)
      .then(() => {
        this.createInProgress = false;
      });
    });
  }
}
