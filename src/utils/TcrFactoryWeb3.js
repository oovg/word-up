import TrcFactoryAbi from '../contracts/TcrFactory.json';
import { getWeb3ServiceInstance } from './Web3Service';

export default class TrcFactoryService {
  web3Service;
  tcrFactoryContract;

  constructor() {
    this.web3Service = getWeb3ServiceInstance();
    this.tokenAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  }

  async initContracts() {
    console.log('init***', TrcFactoryAbi);
    return (this.tcrFactoryContract = await this.web3Service.initContract(
      TrcFactoryAbi.abi,
      this.tokenAddress,
    ));
  }

  async buy(hashId, ercBuyAmount) {
    return await this.tcrFactoryContract.methods
      .buy(hashId, ercBuyAmount)
      .call();
  }

  async sell(hashId, ercSellAmount) {
    return await this.tcrFactoryContract.methods
      .sell(hashId, ercSellAmount)
      .call();
  }

  async createTCR(content, ratio, erc20, startingBalance) {
    console.log(this.tcrFactoryContract);

    return await this.tcrFactoryContract.methods
      .createTCR(content, ratio, erc20, startingBalance)
      .call();
  }

  async renounceOwnership() {
    return await this.tcrFactoryContract.methods.renounceOwnership().call();
  }

  async transferOwnership(addr) {
    return await this.tcrContract.methods.transferOwnership(addr).call();
  }

  async calculatePurchaseReturn(
    supply,
    connectorBalance,
    connectorWeight,
    depositAmount,
  ) {
    return await this.tcrFactoryContract.methods
      .calculatePurchaseReturn(
        supply,
        connectorBalance,
        connectorWeight,
        depositAmount,
      )
      .call();
  }

  async calculateSellReturn(
    supply,
    connectorBalance,
    connectorWeight,
    sellAmount,
  ) {
    return await this.tcrFactoryContract.methods
      .calculateSellReturn(
        supply,
        connectorBalance,
        connectorWeight,
        sellAmount,
      )
      .call();
  }
  async getContent(txHash) {
    return await this.tcrFactoryContract.methods.getContent(txHash).call();
  }
}
