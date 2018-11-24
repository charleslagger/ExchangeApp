#!/bin/bash
cd
cd HyperledgerComposers/
cd ExchangeApp/server/exchange/
export COMPOSER_TLS=true
export COMPOSER_PROVIDERS='{"github":{"provider":"github","module":"passport-github","clientID":"9749b66a49138430867c","clientSecret":"7772d845740729f60fcafe3211f61b9a977019df","authPath":"/auth/github","callbackURL":"/auth/github/callback","successRedirect":"https://35.240.232.211:4200?loggedIn=true","failureRedirect":"/"}, "google":{"provider":"google","module":"passport-google-oauth2","clientID":"114997839444-1938128q7j9ejj00dqhmkj9qn1d39ifq.apps.googleusercontent.com","clientSecret":"4-YBY38_OhNOiwECpV9egv3R","authPath":"/auth/google","callbackURL":"https://exchangeapp.tk","scope": "https://www.googleapis.com/auth/plus.login","successRedirect":"https://localhost:4200?loggedIn=true","failureRedirect":"/"}, "facebook":{"provider":"f","module":"passport-facebook","clientID":"548175495596698","clientSecret":"5a787257ee0e1b8bd405bceecff8afdb","authPath":"/auth/facebook","callbackURL":"/auth/facebook/callback","successRedirect":"https://35.240.232.211:4200?loggedIn=true","failureRedirect":"/"}}'
echo "Starting composer rest server for multiple clients at port 3000"
composer-rest-server -c admin@exchange -m true -n never -p 3000
