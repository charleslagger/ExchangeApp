import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getMyProductBought(currentUser) {
    const httpParams = new HttpParams()
      .set('ownerId', currentUser);

    return this.httpClient.get('https://exchangeapp.tk:3000/api/queries/myProductBought',
      { params: httpParams, withCredentials: true }).toPromise();
  }

  getMyProductSell(currentUser) {
    const httpParams = new HttpParams()
      .set('ownerId', currentUser);
    return this.httpClient.get('https://exchangeapp.tk:3000/api/queries/myProductSelling',
      { params: httpParams, withCredentials: true }).toPromise();
  }

  getCurrentUser() {
    return this.httpClient.get('https://exchangeapp.tk:3000/api/system/ping', { withCredentials: true }).toPromise()
      .then((data) => {
        return this.httpClient.get('https://exchangeapp.tk:3000/api/Collector/' +
          (data['participant'].split('#'))[1], { withCredentials: true }).toPromise()
          .then((result) => {
            return result;
          });
      });
  }

  getCurrentUserPhoto() {
    return this.httpClient.get('https://exchangeapp.tk:3000/api/system/ping', { withCredentials: true }).toPromise()
      .then((data) => {
        return this.httpClient.get('https://exchangeapp.tk:3000/api/Collector/' +
          (data['participant'].split('#'))[1], { withCredentials: true }).toPromise()
          .then((result) => {
            return result['coverPhoto'];
          });
      });
  }

  getCurrentUserId() {
    return this.httpClient.get('https://exchangeapp.tk:3000/api/system/ping', { withCredentials: true }).toPromise()
      .then((data) => {
        // console.log('==>userId: ' + 'resource:' + data['participant']);
        return ('resource:' + data['participant']);
      });
  }
  
  getUserNameById(userId) {
    return this.httpClient.get('https://exchangeapp.tk:3001/api/Collector/' + userId, { withCredentials: true }).toPromise()
      .then((user) => {
        const lastName = (((JSON.stringify(user).split(':\"'))[4]).split('\"'))[0];
        const firstName = (((JSON.stringify(user).split(':\"'))[3]).split('\"'))[0];
        // console.log('==>user name: ' + firstName + ' ' + lastName);
        return firstName + ' ' + lastName;
      });
  }

  deleteProductById(productId) {
    return this.httpClient.delete('https://exchangeapp.tk:3000/api/Product/' + productId,
      {withCredentials: true }).toPromise();
  }

  modProduct(product){
    return this.httpClient.put('https://exchangeapp.tk:3000/api/Product/' + product.productId, product
      ,{withCredentials: true }).toPromise();
  }
}
