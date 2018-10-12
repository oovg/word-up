import React from 'react'
import { Link } from 'react-router-dom'
import Blockie from 'react-blockies'
import Close from '@material-ui/icons/Close'
import './styles.scss'

class Wallet extends React.Component {

  state = {
    walletIsOpen: false
  }

  openWallet = () => {
    console.log('poopin')
    this.setState({walletIsOpen: true})
  }

  closeWallet = () => {
    console.log('closin')
    this.setState({walletIsOpen: false})
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.closeWallet();
  }

  render() {
    return (
      <div className="wallet" >
        <div className="wallet--button" onClick={this.openWallet}>
          <Blockie seed="0xfe89f7s098guoirshg19p843yp8tup84u"/>
        </div>
        { this.state.walletIsOpen &&
        <div className="wallet--view" ref={node => this.node = node}>
          <button className="close button" onClick={this.closeWallet}><Close /></button>
          <p><span>Account</span>0xfe89f7s098guoirshg19p843yp8tup84u</p>
          <h4>Balances</h4>
          <p>3.0 ETH</p>
          <p>200.0 DAI</p>
          <div className="approve--view">
            <p>You need to approve DAI transactions</p>
            <button className="button">Approve DAI</button>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default Wallet
