#!/bin/bash
cd
cd HyperledgerComposers/
cd ExchangeApp/server/exchange/
export COMPOSER_TLS=true
export COMPOSER_PROVIDERS='{"facebook":{"provider":"f","module":"passport-facebook","clientID":"548175495596698","clientSecret":"5a787257ee0e1b8bd405bceecff8afdb","authPath":"/auth/facebook","callbackURL":"/auth/facebook/callback","successRedirect":"http://localhost:4200?loggedIn=true","failureRedirect":"/"}}'
echo "Starting composer rest server for multiple clients at port 3003"
composer-rest-server -c admin@exchange -m true -n never -p 3003
