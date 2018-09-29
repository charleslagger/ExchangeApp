import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getMyProducts() {
    return this.httpClient.get('http://localhost:3001/api/queries/myProducts', {withCredentials: true}).toPromise();
  }

  getCurrentUser() {
    return this.httpClient.get('http://localhost:3000/api/system/ping', {withCredentials: true}).toPromise()
      .then((data) => {
        return this.httpClient.get('http://localhost:3000/api/uet.khoenguyen.exchange.Collector/' +
          (data['participant'].split('#'))[1], {withCredentials: true}).toPromise()
          .then( (result) => {
            return result;
          });
      });
  }

  getCurrentUserId() {
    return this.httpClient.get('http://localhost:3000/api/system/ping', {withCredentials: true}).toPromise()
      .then((data) => {
        return (data['participant'].split('#'))[1];
      });
  }
}
