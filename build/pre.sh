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
cd collectable-penguin-network/
composer archive create -t dir -n .
composer network install -a collectable-penguin-network@0.1.7.bna -c PeerAdmin@hlfv1
composer network start -n collectable-penguin-network -V 0.1.7 -A admin -S adminpw -c PeerAdmin@hlfv1
composer card import -f admin@collectable-penguin-network.card
composer card list








