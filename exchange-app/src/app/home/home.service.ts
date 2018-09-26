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

  buyPenguin(penguinId, currentUser) {
    console.log('Buy product');
    const transactionDetails = {
      $class: 'org.collectable.penguin.Trade',
      penguin: 'resource:org.collectable.penguin.Penguin#' + penguinId,
      newOwner: currentUser
    };

    return this.httpClient.post('http://localhost:3000/api/org.collectable.penguin.Trade',
      transactionDetails, {withCredentials: true}).toPromise();
  }
}
