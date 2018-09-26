import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { HomeService } from './home.service';
import { AccountService } from '../account/account.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public updateProgressStatus: Subject<boolean> = new Subject();

  constructor(private homeService: HomeService,
              private accountService: AccountService) { }
  private availablePenguins;
  private buyInProgress;
  private boughtPenguin;

  ngOnInit() {
    // this.updateProgressStatus = false;
    this.buyInProgress = false;
    this.availablePenguins = this.getAvailablePenguins();
  }

  getAvailablePenguins() {
     return this.homeService.getAvailablePenguins();
  }

  buyPenguin(penguinId) {
    this.buyInProgress = true;
    this.boughtPenguin = penguinId;
    return this.accountService.getCurrentUserId()
      .then((currentUserId) => {
        return this.homeService.buyPenguin(penguinId, currentUserId)
          .then(() => {
            return this.getAvailablePenguins();
          })
          .then(() => {
            this.boughtPenguin = null;
            this.buyInProgress = false;
          });
    });
  }

}
