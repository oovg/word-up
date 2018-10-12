import React from 'react';
import { Link } from 'react-router-dom';
import Blockie from 'react-blockies';
import Close from '@material-ui/icons/Close';
import { getWeb3ServiceInstance } from '../../utils/Web3Service';
import './styles.scss';

class Wallet extends React.Component {
  state = {
    walletIsOpen: false,
    account: null,
    ethBalance: null,
  };

  componentDidMount = async () => {
    this.web3Service = getWeb3ServiceInstance();
    const account = await this.web3Service.getMainAccount();
    const balance = await this.web3Service.getAccountBalance(account);
    const ethBalance = await this.web3Service.toEth(balance);
    this.setState({ account, ethBalance });
  };

  toggleWallet = () => {
    this.setState({ walletIsOpen: !this.state.walletIsOpen });
  };

  render() {
    const { account, ethBalance } = this.state;

    return (
      <div className="wallet">
        <div className="wallet--button" onClick={this.toggleWallet}>
          {account ? <Blockie seed={account} /> : null}
        </div>
        {this.state.walletIsOpen && (
          <div className="wallet--view">
            <button className="close button" onClick={this.toggleWallet}>
              <Close />
            </button>
            <p>
              <span>Account</span>
              {account}
            </p>
            <h4>Balances</h4>
            <p>{ethBalance} ETH</p>
            <p>200.0 DAI</p>
            <div className="approve--view">
              <p>You need to approve DAI transactions</p>
              <button className="button">Approve DAI</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Wallet;
