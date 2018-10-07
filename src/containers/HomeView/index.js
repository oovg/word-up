<<<<<<< HEAD
import { connect } from 'react-redux'
=======
import { Drawer } from '@material-ui/core'
>>>>>>> 58bc39fd3fc1fb48ab989b787564a7aeb130d3bb
import React, { Component } from 'react'
import PromptComposer from '../../components/PromptComposer'
import PromptList from '../../components/PromptList'
import AppBar from '../../components/AppBar'
import Api from '../../api/api'
<<<<<<< HEAD
import { addPrompt } from '../../core/actions/actions-prompts'

class HomeView extends Component {
  constructor(props) {
    super(props)
    // this.api = new Api()
    window.oreo = () => this.props.addPrompt({
      body: 'from oreo',
      id: 3,
      marketCap: 999
    })
  }

=======
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

>>>>>>> 58bc39fd3fc1fb48ab989b787564a7aeb130d3bb
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
          <div className="contents">
            <p>Viewing Prompts</p>
            <button className="button" onClick={this.toggleDrawer('right', true)}><Add /> Add A Prompt</button>
          </div>
        </div>
        <div className="prompts">
<<<<<<< HEAD
          <PromptList prompts={this.props.prompts} />
=======
          <PromptList prompts={this.api.prompts()} />
>>>>>>> 58bc39fd3fc1fb48ab989b787564a7aeb130d3bb
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
