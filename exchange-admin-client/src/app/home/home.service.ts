import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get('https://exchangeapp.tk:3001/api/Product',
      {withCredentials: true}).toPromise();
  }
}
