import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(private httpClient: HttpClient) { }

  getWalletData() {
    return this.httpClient.get('https://localhost:3000/api/wallet',
      {withCredentials: true}).toPromise();
  }
}
