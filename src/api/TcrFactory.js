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
  tcrList(){
    TcrListText = "";
    var events = TcrFactory.TcrCreated({fromBlock: 0, toBlock: 'latest'});
    events.get(function(err, result)
    {
        //console.log("Events that matched: ",JSON.stringify(result));
        //console.log("Events that matched: ",result[0].args);
        for (i = 0; i < result.length; i++) {
        TcrListText += JSON.stringify(result[i].args);
    }
        // Iterate through events or do whatever you want with the resulting array
    });
    });
    return TcrListText;
  };
}

export default TcrFactory
