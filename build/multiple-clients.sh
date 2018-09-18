#!/bin/bash
cd
cd HyperledgerComposers/
cd collectable-penguin-network/
export COMPOSER_PROVIDERS='{"github":{"provider":"github","module":"passport-github","clientID":"584e700a8223a3966a66","clientSecret":"ea07cb8501701c86ae769994fe5f4d517d895acc","authPath":"/auth/github","callbackURL":"/auth/github/callback","successRedirect":"http://192.168.1.81:4200?loggedIn=true","failureRedirect":"/"}}'
echo "Starting composer rest server for multiple clients at port 3000"
composer-rest-server -c admin@collectable-penguin-network -a true -m true
