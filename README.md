# Donation transparency with Hyperledger Fabric intro
This is a very simple demonstration of how to write smart contracts on Hyperledger Fabric (1.4). During this lab, you will:


1. Create and package your first smart contract
2. Connect to a local instance of Hyperledger Fabric blockchain
3. Code and run a smart contract
4. Submit transactions to the ledger


We will be doing the development using a Fabric extension to VS Code. There are other ways to develop Fabric blockchain contracts, but using the extension is a good way to start the first time. And, if you ever want to migrate your code to IBM Blockchain Platform in IBM Cloud, it will be a lot easier.

Feel free to check the pre-written smart contract in /lib folder to get inspiration or if you are stuck!


## Prerequisites (preferrably latest)
- VS Code (https://code.visualstudio.com)
- Docker (https://www.docker.com/get-started)
- Docker Compose (https://docs.docker.com/compose/install/)
- NodeJS + npm (https://nodejs.org/en/download/)

## Steps
Follow the link below to get to the tutorial to set up the environment and get started! 

https://cloud.ibm.com/docs/services/blockchain/howto?topic=blockchain-develop-vscode

Follow the tutorial until step two. When selecting language, pick javascript and when creating the asset, name it "donation" instead of "bond". 

### Step 1:
Set up the environment and create a new project with an asset named "Donation".

### Step 2:
Create a new smart contract function "createResearchProject" that upon invocation, creates a new research project that is seeking funding that consists of the following fields:
- Project ID
- Project name
- Description
- Amount to be raised
- Funding status (Collecting / Achieved)
- Name of research organization (RO)
- Name of charity that collects money for the RO

### Step 3:
Now when you have a smart contract function that creates new research projects, try invoking it by connecting to the Fabric Gateway, expanding Channels, mychannel, then your instantiated smart contract. There, you will find the available functions to invoke. Select "createResearchProject" and send in the arguments that you require. NOTE: they must be strings. If you want to handle integers, you have to convert them inside the function.

### Step 4:
Follow the same steps as above, but instead call the read/query function to validate that the asset was submitted to the ledger.

### Step 5:
Modify the function that creates the asset (probably named "createDonation" if you named your asset "Donation") to accept these parameters:
- Name of donor
- Amount of money to donate
- The targeted research project ID (see step 2)

### Step 6:
Similar to Step 3, invoke the function that creates donations and then read the project asset to see if the donation made it all the way.

Great work! That's it, hope you had fun and learned something. 

#### Going forward:
I would recommend to have a read on their Read the Docs page (https://hyperledger-fabric.readthedocs.io/en/release-1.4/) to get acquianted with key concepts, the various components of the network and how their interact and other fun stuff. If you want to see other sample/tutorial projects I would recommend to check their Fabric Samples repository (https://github.com/hyperledger/fabric-samples). For instance, check out their Commercial Paper network!

