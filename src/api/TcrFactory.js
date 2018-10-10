import abi from './TcrFactoryAbi.js';
var FakeDaiAddress = "0x336a213839f8b27518aaf40d9afe9788e2a8a44c";

class TcrFactory {
  constructor(web3, account, contractAddress) {
    const TcrFactoryContract = web3.eth.contract(abi, contractAddress)
    this.factory = TcrFactoryContract.at(contractAddress)
    this.account = account
  }

//Create TCR Call
  createTCR(content, ratio, erc20TokenAddress, initialSpend) {
    this.factory.createTCR(content, ratio, erc20TokenAddress, initialSpend,
      { from: this.account, gas: 3000000 }, (error, transactionHash) => {
        console.log('transactionHash: ', transactionHash)
        console.log('error: ', error)
      }
    )
  }

};


export default TcrFactory
