import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getListUsers() {
    return this.httpClient.get('https://localhost:3001/api/Collector',
      { withCredentials: true }).toPromise();
  }
}
