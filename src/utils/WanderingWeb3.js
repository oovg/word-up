import WanderingAbi from '../../src/dist/WanderingToken.json';
import { getWeb3ServiceInstance } from './Web3Service';

export default class WanderingService {
  web3Service;
  wanderingContract;

  constructor() {
    this.web3Service = getWeb3ServiceInstance();
    this.tokenAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  }

  async initContracts() {
    return (this.wanderingContract = await this.web3Service.initContract(
      WanderingAbi.abi,
      this.tokenAddress,
    ));
  }

  async sendTo(from, to, latitude, longitude, tokenId) {
    const latInt = this.coordinateToInt(latitude);
    const lngInt = this.coordinateToInt(longitude);

    return await this.wanderingContract.methods
      .safeTransferFrom(from, to, latInt, lngInt, tokenId)
      .send({ from: from });
  }

  async getCoordinates(address, tokenId = 1) {
    const res = await this.wanderingContract.methods
      .getCoordinates(address, tokenId)
      .call();
    return {
      lat: this.intToCoordinate(res.latitude),
      lng: this.intToCoordinate(res.longitude),
    };
  }

  async getOwner(tokenId = 1) {
    return await this.wanderingContract.methods.ownerOf(tokenId).call();
  }

  async getAllOwnerCords(tokenId = 1) {
    const coords = [];
    const contract = this.wanderingContract.methods;
    const numOwners = await contract.numOwners().call();
    for (let i = 0; i < numOwners; i++) {
      let addr = await contract.ownersLUT(i).call();
      let addrHasOwned = await contract.addrHasOwned(addr, tokenId).call();
      if (addrHasOwned) {
        let coord = await contract.getCoordinates(addr, tokenId).call();
        coords.push({
          lat: this.intToCoordinate(coord.latitude),
          lng: this.intToCoordinate(coord.longitude),
        });
      }
    }
    return coords;
  }

  async balanceOfTank() {
    return await this.wanderingContract.methods.balanceOfTank().call();
  }

  async sendTransaction(from, value) {
    this.web3Service.web3.eth.sendTransaction({
      from: from,
      to: process.env.REACT_APP_CONTRACT_ADDRESS,
      value: value,
    });
  }

  toEth(value) {
    return this.web3Service.toEth(value);
  }

  toWei(value) {
    return this.web3Service.toWei(value);
  }

  coordinateToInt(coordinate) {
    return Math.round(coordinate * 10000000, 7);
  }

  intToCoordinate(int) {
    return parseInt(int, 10) / 10000000;
  }
}
