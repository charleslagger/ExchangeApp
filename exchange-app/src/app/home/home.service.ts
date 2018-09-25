import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getAvailablePenguins() {
    return this.httpClient.get('http://localhost:3000/api/queries/availablePenguins', {withCredentials: true}).toPromise();
  }
}
