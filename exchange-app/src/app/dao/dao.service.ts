import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(private httpClient: HttpClient) { }
  getWalletData() {
    return this.httpClient.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
      {withCredentials: true}).toPromise();
  }
}
