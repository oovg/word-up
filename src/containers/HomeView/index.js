import { connect } from 'react-redux'
import React, { Component } from 'react'
import Add from '@material-ui/icons/Add'

import PromptList from '../../components/PromptList'
import AppBar from '../../components/AppBar'
import { addPrompt } from '../../core/actions/actions-prompts'
import { openRightDrawer } from '../../core/actions/actions-ui'

import './styles.scss'

class HomeView extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <div className="toolbar">
          <div className="contents">
            <h2>Viewing Prompts</h2>
            <button className="button" onClick={this.props.openRightDrawer}><Add /> Add A Prompt</button>
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
  { addPrompt, openRightDrawer }
)(HomeView)
