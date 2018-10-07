import { connect } from 'react-redux'
import { Drawer } from '@material-ui/core'
import React, { Component } from 'react'
import PromptComposer from '../../components/PromptComposer'
import PromptList from '../../components/PromptList'
import AppBar from '../../components/AppBar'
import Api from '../../api/api'
import { addPrompt } from '../../core/actions/actions-prompts'
import Add from '@material-ui/icons/Add'
import Close from '@material-ui/icons/Close'

import './styles.scss'

class HomeView extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  };

  render() {
    return (
      <div>
        <Drawer width="50%" containerClassName="drawer--party" className="drawer--prompt" anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <button
            className="button plain button--close"
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <Close />
          </button>
          <PromptComposer />
        </Drawer>
        <AppBar />
        <div className="toolbar">
          <div className="contents">
            <p>Viewing Prompts</p>
            <button className="button" onClick={this.toggleDrawer('right', true)}><Add /> Add A Prompt</button>
          </div>
        </div>
        <div className="prompts">
          <PromptList prompts={this.props.prompts} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    prompts: state.prompts.prompts
  }
}

export default connect(
  mapStateToProps,
  { addPrompt }
)(HomeView)
