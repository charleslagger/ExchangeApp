#!/bin/bash
cd
cd HyperledgerComposers/
cd ExchangeApp/server/exchange/
export COMPOSER_TLS=true
export COMPOSER_PROVIDERS='{"github":{"provider":"github","module":"passport-github","clientID":"584e700a8223a3966a66","clientSecret":"ea07cb8501701c86ae769994fe5f4d517d895acc","authPath":"/auth/github","callbackURL":"/auth/github/callback","successRedirect":"https://localhost:4200?loggedIn=true","failureRedirect":"/"}, "google":{"provider":"google","module":"passport-google-oauth2","clientID":"114997839444-1938128q7j9ejj00dqhmkj9qn1d39ifq.apps.googleusercontent.com","clientSecret":"4-YBY38_OhNOiwECpV9egv3R","authPath":"/auth/google","callbackURL":"/auth/google/callback","scope": "https://www.googleapis.com/auth/plus.login","successRedirect":"https://localhost:4200?loggedIn=true","failureRedirect":"/"}, "facebook":{"provider":"f","module":"passport-facebook","clientID":"548175495596698","clientSecret":"5a787257ee0e1b8bd405bceecff8afdb","authPath":"/auth/facebook","callbackURL":"/auth/facebook/callback","successRedirect":"https://localhost:4200?loggedIn=true","failureRedirect":"/"}}'
echo "Starting composer rest server for multiple clients at port 3000"
composer-rest-server -c admin@exchange -m true -n never -p 3000
