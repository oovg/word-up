import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import AppBar from '../../components/AppBar'
import Prompt from '../../components/Prompt'

import './styles.scss'

// Drawer
import { Drawer } from '@material-ui/core'
import Close from '@material-ui/icons/Close'



class PromptView extends Component {

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
      <Fragment>
        <Drawer width="50%" className="drawer--prompt" anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <button
            className="button plain button--close"
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <Close />
          </button>
          <div className="contents">
            <h2>Buy this shit!</h2>
          </div>
        </Drawer>
        <AppBar />
        <Prompt data={this.props.prompt} />
        <div className="passages--container">
          <div className="contents">
            <div className="passages">
              { this.passages() }
            </div>
            <div className="spacer"><p></p></div>
          </div>
        </div>

      </Fragment>
    )
  }
  passages() {
    return this.props.prompt.passages.map(passage => {
      return (
          <span onClick={this.toggleDrawer('right', true)}>{ passage.versions[0].body }</span>
      )
    })
  }
}

const mapStateToProps = (state, ownProps) => ({
  prompt: state.prompts.find(prompt => prompt.id == ownProps.match.params.id)
})

export default connect(mapStateToProps)(PromptView)
