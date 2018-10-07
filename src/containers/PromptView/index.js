import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import constants from 'core/types'

import AppBar from '../../components/AppBar'
import Add from '@material-ui/icons/Add'
import Prompt from '../../components/Prompt'
import { openRightDrawer, updateDrawerContext } from '../../core/actions/actions-ui'

import './styles.scss'

class PromptView extends Component {
  toggleDrawer = passageId => () => {
    this.props.openRightDrawer()
    this.props.updateDrawerContext(
      constants.VERSIONS,
      { promptId: this.props.prompt.id, passageId }
    )
  }

  openPassageDrawer = () => {
    this.props.openRightDrawer()
    this.props.updateDrawerContext(
      constants.PASSAGE_COMPOSER,
      { promptId: this.props.prompt.id }
    )
  }

  passages() {
    if (this.props.prompt && this.props.prompt.passages) {
      return this.props.prompt.passages.map((passage, i) => {
        return (
          <span onClick={this.toggleDrawer(i)}>{ passage.versions[0].body }</span>
        )
      })
    }
  }

  render() {
    return (
      <Fragment>
        <AppBar />
        <Prompt data={this.props.prompt} hideReadMore />
        <div className="passages--container">
          <div className="contents">
            <div className="passages">
              { this.passages() } <span className="passage-add" onClick={this.openPassageDrawer}><Add /></span>
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

export default connect(mapStateToProps, { openRightDrawer, updateDrawerContext })(PromptView)
