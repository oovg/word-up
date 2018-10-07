import abi from './TcrFactoryAbi'

class TcrFactory {
  constructor(web3, account, contractAddress) {
    const TcrFactoryContract = web3.eth.contract(abi, contractAddress)
    this.TcrFactory = TcrFactoryContract.at(contractAddress)
    this.account = account
  }

  createTCR(content, ratio, erc20TokenAddress, initialSpend) {
    this.TcrFactory.createTCR(content, ratio, erc20TokenAddress, initialSpend,
      { from: this.account, gas: 3000000 }, (error, transactionHash) => {
        console.log('transactionHash: ', transactionHash)
        console.log('error: ', error)
      }
    )
  }
}

export default TcrFactory
