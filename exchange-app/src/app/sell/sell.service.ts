import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name, productType, pricePerUnit, amount, imageBase64Encode,
      description, cartStatus, currentUser) {
    const transactions = {
      $class: 'uet.khoenguyen.exchange.Product',
      productId: name,
      productType: productType,
      pricePerUnit: pricePerUnit,
      amount: amount,
      imageBase64Encode: imageBase64Encode,
      description: description,
      cartStatus: cartStatus,
      owner: currentUser
    };

    return this.httpClient.post('http://localhost:3001/api/uet.khoenguyen.exchange.Product',
      transactions, {withCredentials: true}).toPromise();
  }
}
