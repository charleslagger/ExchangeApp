#!/bin/bash
cd
echo "Remove previous version server"
rm -R .composer/
cd fabric-dev-servers/
export FABRIC_VERSION=hlfv12
sudo ./teardownFabric.sh
echo "Starting Hyperledger composer server"
sudo ./startFabric.sh
echo "Create Peer Admin card"
./createPeerAdminCard.sh
cd ..
echo "Starting project"
cd HyperledgerComposers/
echo "Install and deply card"
cd ExchangeApp/server/exchange
composer archive create -t dir -n .
composer network install -a exchange@0.0.1.bna -c PeerAdmin@hlfv1
composer network start -n exchange -V 0.0.1 -A admin -S adminpw -c PeerAdmin@hlfv1
composer	 card import -f admin@exchange.card
composer card list








