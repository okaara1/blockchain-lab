# Hyperledger Fabric Intro Lab!
This is a very simple demonstration of how to write smart contracts on Hyperledger Fabric (1.4). During this lab, you will:


1. Create and package your first smart contract
2. Connect to a local instance of Hyperledger Fabric blockchain
3. Run and debug a smart contract
4. Submit transactions to the ledger


We will be doing the development using a Fabric extension to VS Code. There are other ways to develop Fabric blockchain contracts, but using the extension is a good way to start the first time. And, if you ever want to migrate your code to IBM Blockchain Platform in IBM Cloud, it will be a lot easier.


## Prerequisites (preferrably latest)
- VS Code (https://code.visualstudio.com)
- Docker (https://www.docker.com/products/docker-desktop)
- NodeJS (https://nodejs.org/en/download/)

## Steps
Follow the link below to get to the tutorial to set up the environment and get started! 

https://cloud.ibm.com/docs/services/blockchain/howto?topic=blockchain-develop-vscode

### Step 1:
Set up the environment and create a new project with an asset named "Donation".

### Step 2:
Create a new smart contract function that upon invocation, creates a new research project that is seeking funding that consists of the following fields:
- Project ID
- Project name
- Description
- Amount to be raised
- Name of research organization (RO)
- Name of charity that collects money for the RO

### Step 3:
Modify the function that creates the asset (Donation) to accept these parameters:
- Name of donor
- Amount of money to donate
- The targeted research project ID (see step 2)
