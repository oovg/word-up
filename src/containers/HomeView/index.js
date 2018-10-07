import { connect } from 'react-redux'
import React, { Component } from 'react'
import Add from '@material-ui/icons/Add'
import constants from 'core/types'

import PromptList from '../../components/PromptList'
import AppBar from '../../components/AppBar'
import { addPrompt } from '../../core/actions/actions-prompts'
import { openRightDrawer, updateDrawerContext } from '../../core/actions/actions-ui'
import TcrFactory from '../../api/TcrFactory'

import './styles.scss'

class HomeView extends Component {
  // constructor(props) {
  //   super(props)
  //   const account = '0x811f2781f44341e55a96d59089dc306a5a63d887'
  //   const contractAddr = '0x50f49227cee1a24a4431c02d3e394575b4dDF10a'
  //   const erc20Addr = '0x3e0aa8a75edd643cbca2f5cd54b2f771d536afb6'
  //   const factory = new TcrFactory(web3, account, contractAddr)
  //
  //   factory.createTCR('content', 2, erc20Addr, 0)
  // }

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
