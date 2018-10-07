import { connect } from 'react-redux'
import React, { Component } from 'react'
import Add from '@material-ui/icons/Add'
import constants from 'core/types'
// import Web3 from 'web3'

import PromptList from '../../components/PromptList'
import AppBar from '../../components/AppBar'
import { addPrompt } from '../../core/actions/actions-prompts'
import { openRightDrawer, updateDrawerContext } from '../../core/actions/actions-ui'
import { tcrList } from '../../api/TcrList'
// import tcrFactory from '../../api/TcrFactory'

import './styles.scss'

class HomeView extends Component {
   constructor(props) {
     super(props)
   const account = '0xd66e018cc12b0e35dc1abf0991cef06a6bd295b9'
   const contractAddr = '0x73f24e09486db7e69705f465832be91b13e67917'
   const erc20Addr = '0x08cd0c6dc1ff4614053dca4a4a6aa39655d19b32'
   const factory = tcrFactory(web3, account, contractAddr)

   factory.createTCR('content', 2, erc20Addr, 0, { from: account, gas: 3000000 }, (error, transactionHash) => {
     console.log('transactionHash: ', transactionHash)
     console.log('error: ', error)

   listoftcrs = factory.tcrList()
   console.log(listoftcrs)
   })
   }


  openPromptComposer() {
    this.props.openRightDrawer()
    this.props.updateDrawerContext(constants.PROMPT_COMPOSER, {})
  }

  render() {
    return (
      <div>
        <AppBar />
        <div className="toolbar">
          <div className="contents">
            <h2>Viewing Prompts</h2>
            <button className="button" onClick={this.openPromptComposer.bind(this)}><Add /> Add A Prompt</button>
          </div>
        </div>
        <div className="prompts">
          <PromptList prompts={this.props.prompts} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ prompts: state.prompts })

export default connect(
  mapStateToProps,
  { addPrompt, openRightDrawer, updateDrawerContext }
)(HomeView)
