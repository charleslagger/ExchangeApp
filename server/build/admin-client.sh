#!/bin/bash
cd
cd HyperledgerComposers/
cd ExchangeApp/server/exchange/
echo "Starting composer rest server for admin at port 3001"
export COMPOSER_TLS=true
composer-rest-server -c admin@exchange -p 4200 -n never
