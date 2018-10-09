import abi from './TcrFactoryAbi.js'

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
