const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_supply",
        "type": "uint256"
      },
      {
        "name": "_connectorBalance",
        "type": "uint256"
      },
      {
        "name": "_connectorWeight",
        "type": "uint32"
      },
      {
        "name": "_depositAmount",
        "type": "uint256"
      }
    ],
    "name": "calculatePurchaseReturn",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tcrKeys",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_supply",
        "type": "uint256"
      },
      {
        "name": "_connectorBalance",
        "type": "uint256"
      },
      {
        "name": "_connectorWeight",
        "type": "uint32"
      },
      {
        "name": "_sellAmount",
        "type": "uint256"
      }
    ],
    "name": "calculateSaleReturn",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "tcrs",
    "outputs": [
      {
        "name": "content",
        "type": "string"
      },
      {
        "name": "reserveRatio",
        "type": "uint32"
      },
      {
        "name": "poolBalance",
        "type": "uint256"
      },
      {
        "name": "totalSharesSupply",
        "type": "uint256"
      },
      {
        "name": "ERC20token",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "hashId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "amountMinted",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "totalCost",
        "type": "uint256"
      }
    ],
    "name": "LogMint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "hashId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "amountWithdrawn",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "reward",
        "type": "uint256"
      }
    ],
    "name": "LogWithdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "hashId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "logString",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "LogBondingCurve",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "hashId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "content",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "ratio",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "erc20",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "startingBalance",
        "type": "uint32"
      }
    ],
    "name": "TcrCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipRenounced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "content",
        "type": "string"
      },
      {
        "name": "ratio",
        "type": "uint32"
      },
      {
        "name": "erc20",
        "type": "address"
      },
      {
        "name": "startingBalance",
        "type": "uint32"
      }
    ],
    "name": "createTCR",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "hashId",
        "type": "bytes32"
      },
      {
        "name": "ercBuyAmount",
        "type": "uint256"
      }
    ],
    "name": "buy",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "hashId",
        "type": "bytes32"
      },
      {
        "name": "sellSharesAmount",
        "type": "uint256"
      }
    ],
    "name": "sell",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "content",
        "type": "string"
      },
      {
        "name": "reserveRatio",
        "type": "uint32"
      },
      {
        "name": "ERC20token",
        "type": "address"
      }
    ],
    "name": "getHashId",
    "outputs": [
      {
        "name": "hash",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "hashId",
        "type": "bytes32"
      }
    ],
    "name": "getContent",
    "outputs": [
      {
        "name": "content",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getKeys",
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTcrCount",
    "outputs": [
      {
        "name": "tcrCount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "m",
        "type": "bytes"
      }
    ],
    "name": "hello",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export default abi
