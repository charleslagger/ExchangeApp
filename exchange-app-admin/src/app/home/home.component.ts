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
  constructor(private homeService: HomeService) { }
  private listProducts;

  ngOnInit() {
    this.listProducts = this.getAllProducts();
  }

  getAllProducts() {
    return this.homeService.getAllProducts();
  }
}
