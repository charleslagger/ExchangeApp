#!/bin/bash
cd
cd HyperledgerComposers/
cd collectable-penguin-network/
echo "Starting composer rest server for admin at port 3001"
composer-rest-server -c admin@collectable-penguin-network -p 3001
