import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name, productType, pricePerUnit, amount, imageBase64Encode,
      description, cartStatus, currentUser, ownerImage) {
    const transactions = {
      $class: 'uet.khoenguyen.exchange.Product',
      productId: 'PRO_' + (new Date()).getTime(),
      productName: name,
      productType: productType,
      pricePerUnit: pricePerUnit,
      amount: amount,
      imageBase64Encode: imageBase64Encode,
      description: description,
      cartStatus: cartStatus,
      productStatus: 'SELLING',
      owner: currentUser,
      ownerImage: ownerImage
    };

    return this.httpClient.post('https://exchangeapp.tk:3000/api/Product',
      transactions, {withCredentials: true}).toPromise();
  }
}
