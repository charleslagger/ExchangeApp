/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */
var NS = 'uet.khoenguyen.exchange';

/**
 * Track the trade of a product from one collector to another
 * @param {uet.khoenguyen.exchange.Trade} tx - the trade to be processed
 * @transaction
 */
function tradeProduct(tx) {

    // set the new owner of the commodity
    tx.oldOwner = tx.product.owner;
    tx.product.owner = tx.newOwner;
    
    var totalPrice = tx.product.amount * tx.product.pricePerUnit;
    if(tx.newOwner.accountBalance >= totalPrice){
      tx.newOwner.accountBalance -= totalPrice;
      return getAssetRegistry(NS + '.Product')
          .then(function (assetRegistry) {
              // persist the state of the commodity
              assetRegistry.update(tx.product);
              return getParticipantRegistry(NS + '.Collector')
                .then(function (paricipantRegistry) {
                  return paricipantRegistry.update(tx.newOwner);
                })
          });
    }
}

/**
 * Get all product buyer add to cart
 * @param {uet.khoenguyen.exchange.ListProInCart} tx
 * @transaction
 */
function getListProInCart(tx){
  tx.product.cartStatus = (new Date()).getTime().toString() + tx.newOwnerTemp;
  return getAssetRegistry(NS + '.Product')
      .then(function (assetRegistry) {
        return assetRegistry.update(tx.product);
      });
}

/**
 * Add money to account
 * @param {uet.khoenguyen.exchange.IncreaseBalance} tx
 * @transaction
 */
function increaseBalance(tx){
  // tx.owner.accountBalance = parseFloat(tx.owner.accountBalance) + parseFloat(tx.amountMoney);
  tx.owner.accountBalance += tx.amountMoney;
  return getParticipantRegistry(NS + '.Collector')
      .then(function (paricipant) {
        return paricipant.update(tx.owner);
      });
}

/**
 * Remove all high volume commodities
 * @param {uet.khoenguyen.exchange._demoSetup} remove - the remove to be processed
 * @transaction
 */
function setup(){
    var factory = getFactory();
    var collectors = [
      factory.newResource(NS,'Collector','JERRY'),
      factory.newResource(NS,'Collector','TEP'),
      factory.newResource(NS,'Collector','TOM'),
      factory.newResource(NS,'Collector','WHOLESALER')
    ];    
                          
    var products = [
      factory.newResource(NS,'Product','Nova 3i'),
      factory.newResource(NS,'Product','Nokia X6'),
      factory.newResource(NS,'Product','SamSung S9'),
      factory.newResource(NS,'Product','BPhone'),
      factory.newResource(NS,'Product','Iphone XS MAX')
      ];
 
    /* add the resource and the traders */
    return getParticipantRegistry(NS+'.Collector')
  .then(function(collectorRegistry){
            collectors.forEach(function(collector) {
          collector.accountBalance = 100000000;
          collector.firstName = collector.getIdentifier().toLowerCase();
          collector.lastName = 'Collector';
          collector.phoneNumber = '0988888888';

          const importerAddress = factory.newConcept(NS, 'Address');
          importerAddress.city = 'Ha Noi';
          importerAddress.country = "Viet Nam";
          importerAddress.street = "Cau Giay";

          collector.address = importerAddress;
      });
      return collectorRegistry.addAll(collectors);
    })
  .then(function(){
    	return getAssetRegistry(NS+'.Product');
    })
  .then(function(assetRegistry){
      products.forEach(function(product) {
        product.productType= 'SMART_PHONE';
        product.pricePerUnit= 6000000;
        product.amount = 2;
        product.imageBase64Encode = "Image encode";
        product.description = 'Smart phone: ' + product.getIdentifier();
        product.owner = factory.newRelationship(NS,'Collector','WHOLESALER');
      })
      return assetRegistry.addAll(products);
    });
}