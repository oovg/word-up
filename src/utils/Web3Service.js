import Web3 from 'web3';

export default class Web3Service {
  web3;
  web3Remote;
  mainAccount;

  async init() {
    let provider;
    if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider);
    }
    provider = new Web3.providers['HttpProvider'](
      process.env.REACT_APP_REMOTE_WEB3_PROVIDER,
    );

    this.web3Remote = new Web3(provider);
    this.mainAccount = await this.getMainAccount();
  }

  async getMainAccount() {
    const accounts = await this.web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log('No accounts.');
    }
    return accounts[0];
  }

  async getAccountBalance(address) {
    return await new this.web3.eth.getBalance(address);
  }

  async initContract(abi, address) {
    return await new this.web3.eth.Contract(abi, address);
  }

  async initContractRemote(abi, address) {
    return await new this.web3Remote.eth.Contract(abi, address);
  }

  async toWei(amount) {
    return await this.web3.utils.toWei(amount);
  }

  async toEth(amount) {
    return await this.web3.utils.fromWei(amount, 'ether');
  }
}

const web3Service = new Web3Service();
(async () => {
  await web3Service.init();
})();

export const getWeb3ServiceInstance = () => {
  return web3Service;
};

export const getAddress = async () => {
  return await web3Service.getMainAccount();
};

export const getBalance = async (address) => {
  return await web3Service.getAccountBalance(address);
};

export const toWei = async (amount) => {
  return await this.web3.utils.toWei(amount);
};

export const toEth = async (amount) => {
  return await this.web3.utils.fromWei(amount, 'ether');
};
