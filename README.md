Hello im Sasha.
This application has been prepared by me for the purpose of interacting with Namada Blockchain.
# Sasha Namada APP

This is an open-source web application that interacts with the Namadac blockchain. It provides various features such as Faucet, retrieving bonded stake validators, finding a validator, getting validator state, checking balance, and showing the last block.

## Features

- Submit a faucet
- Retrieve bonded stake validators.
- Find a validator by address.
- Get the state of a validator.
- Check the balance of a wallet address.
- Show information about the last block.

## Getting Started

1. Clone the repository:

   git clone https://github.com/SonOfBTC/NamadaSashaApp.git
   cd NamadaSashaApp
   npm install
   
## Requirements

Before using this application, ensure that you have the following requirements:

1. **Namada Full Node:**

   This application interacts with the Namada blockchain. Make sure you have a running Namada full node. If you don't have it installed, you can follow the official Namadac installation instructions on the https://docs.namada.net/operators/ledger/running-a-full-node
   
 2. Dependencies
Express.js
Body-parser
Child_process
jQuery

   Once your Namadac full node is up and running, configure the application to connect to your node. Open the `index.js` change YourWalletAllias with your own wallet adress and change --memo yourpublickey
   const command = `namadac transfer --source YourWalletAllias --target ${targetAddress} --token naan --amount 0.00001 --memo Yourpublickey --node http://namadasasharpc.xyz/`;

   run this command in the project directory "node index.js"
   run this command to allow your terminal run this app with port 3000 "sudo ufw allow 3000"
   Open your browser and go to http://localhost:3000 or if you are running your teminal locally use its local ip like http://192.168.1.106:3000/

   Contributing
Feel free to contribute to the development of this application by opening issues or submitting pull requests.

License
This project is licensed under the MIT License.

