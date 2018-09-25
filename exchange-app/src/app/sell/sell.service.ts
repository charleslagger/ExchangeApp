import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private httpClient: HttpClient) { }

  createPenguin(name, description, currentUser) {
    const transactions = {
      $class: 'org.collectable.penguin.Penguin',
      name: name,
      description: description,
      owner: currentUser
    };

    return this.httpClient.post('http://localhost:3001/api/org.collectable.penguin.Penguin',
      transactions, {withCredentials: true}).toPromise();
  }
}
