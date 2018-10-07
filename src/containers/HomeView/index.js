import { connect } from 'react-redux'
import { Drawer } from '@material-ui/core'
import React, { Component } from 'react'
import PromptComposer from '../../components/PromptComposer'
import PromptList from '../../components/PromptList'
import AppBar from '../../components/AppBar'
// import Api from '../../api/api'
import { addPrompt } from '../../core/actions/actions-prompts'
import Add from '@material-ui/icons/Add'
import Close from '@material-ui/icons/Close'

import './styles.scss'

class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }


  toggleDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  drawer() {
    return (
      <Drawer width="50%" className="drawer--prompt" anchor="right" open={this.state.drawerOpen} onClose={this.toggleDrawer}>
        <button
          className="button plain button--close"
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer}
          onKeyDown={this.toggleDrawer}
        >
          <Close />
        </button>
        <PromptComposer />
      </Drawer>
    )
  }

  render() {
    return (
      <div>
        { this.drawer() }
        <AppBar />
        <div className="toolbar">
          <div className="contents">
            <h2>Viewing Prompts</h2>
            <button className="button" onClick={this.toggleDrawer}><Add /> Add A Prompt</button>
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
  { addPrompt }
)(HomeView)
