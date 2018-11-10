#!/bin/bash
cd
cd HyperledgerComposers/
cd ExchangeApp/server/exchange/
export COMPOSER_TLS=true
export COMPOSER_PROVIDERS='{"google":{"provider":"google","module":"passport-google-oauth2","clientID":"114997839444-1938128q7j9ejj00dqhmkj9qn1d39ifq.apps.googleusercontent.com","clientSecret":"4-YBY38_OhNOiwECpV9egv3R","authPath":"/auth/google","callbackURL":"/auth/google/callback","scope": "https://www.googleapis.com/auth/plus.login","successRedirect":"http://localhost:4200?loggedIn=true","failureRedirect":"/"}}'
echo "Starting composer rest server for multiple clients at port 3000"
composer-rest-server -c admin@exchange -m true -n never -p 3002
