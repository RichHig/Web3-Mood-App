// these are the 2 variables i used in the frontend configuration

const MoodContractAddress = "0xB21998d39B22e332be6760A10ea8f5C4c8596E9c";

const MoodContractABI = [
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "_mood",
              "type": "string"
          }
      ],
      "name": "setMood",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getMood",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  }
]