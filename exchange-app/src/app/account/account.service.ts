import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getMyPenguins() {
    return this.httpClient.get('http://localhost:3001/api/queries/myPenguins', {withCredentials: true}).toPromise();
  }
}
