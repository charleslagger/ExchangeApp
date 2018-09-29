#!/bin/bash
cd
rm -R .composer/
cd fabric-dev-servers/
sudo ./teardownFabric.sh
echo "Starting Hyperledger composer server"
sudo ./startFabric.sh
echo "Create Peer Admin card"
./createPeerAdminCard.sh
cd ..
echo "Starting project"
cd HyperledgerComposers/
echo "Replace name project"
cd ExchangeApp/server/exchange
composer archive create -t dir -n .
composer network install -a exchange@0.2.5.bna -c PeerAdmin@hlfv1
composer network start -n exchange -V 0.2.5 -A admin -S adminpw -c PeerAdmin@hlfv1
composer card import -f admin@exchange.card
composer card list








