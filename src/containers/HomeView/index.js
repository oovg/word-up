import { Drawer } from '@material-ui/core'
import React, { Component } from 'react'
import PromptComposer from '../../components/PromptComposer'
import PromptList from '../../components/PromptList'
import AppBar from '../../components/AppBar'
import Api from '../../api/api'
import Add from '@material-ui/icons/Add'

import './styles.scss'

class HomeView extends Component {
  constructor() {
    super()
    this.api = new Api()
  }

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <div>
        <Drawer width="50%" containerClassName="drawer--party" className="drawer--prompt" anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer('right', false)}
          onKeyDown={this.toggleDrawer('right', false)}
        >
        </div>
          <PromptComposer />
        </Drawer>
        <AppBar />
        <div className="toolbar">
          <p>Viewing Prompts</p>
          <button className="button" onClick={this.toggleDrawer('right', true)}><Add /> Add A Prompt</button>
        </div>
        <div className="prompts">
          <PromptList prompts={this.api.prompts()} />
        </div>
      </div>

    )
  }
}

export default HomeView
