import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import AppBar from '../../components/AppBar'
import Prompt from '../../components/Prompt'

import './styles.scss'

import { Drawer } from '@material-ui/core'
import Close from '@material-ui/icons/Close'

class PromptView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawer: {
        open: false,
        passageId: null
      }
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer = passageId => () => {
    let nextPassageId = this.state.drawer.passageId
    if (passageId !== undefined) {
      nextPassageId = passageId
    }

    this.setState({
      drawer: {
        open: !this.state.drawer.open,
        passageId: nextPassageId
      }
    })
  }

  passages() {
    return this.props.prompt.passages.map((passage, i) => {
      return (
        <span onClick={this.toggleDrawer(i)}>{ passage.versions[0].body }</span>
      )
    })
  }

  versions() {
    const passageId = this.state.drawer.passageId
    const passage = this.props.prompt.passages[passageId]
    if (passage) {
      return passage.versions.map((version) => {
        return (
          <div>{ version.body }</div>
        )
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Drawer width="50%" className="drawer--prompt" anchor="right" open={this.state.drawer.open} onClose={this.toggleDrawer()}>
          <button
            className="button plain button--close"
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer()}
            onKeyDown={this.toggleDrawer()}
          >
            <Close />
          </button>
          <div className="contents">
            <h2>Buy this shit!</h2>
            <div className="versions">
              { this.versions() }
            </div>
          </div>
        </Drawer>

        <AppBar />
        <Prompt data={this.props.prompt} />
        <div className="passages--container">
          <div className="contents">
            <div className="passages">
              { this.passages() }
            </div>
            <div className="spacer"><p /></div>
          </div>
        </div>

      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  prompt: state.prompts.find(prompt => prompt.id == ownProps.match.params.id)
})

export default connect(mapStateToProps)(PromptView)
