import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AppBar from '../../components/AppBar'
import Prompt from '../../components/Prompt'

import './styles.scss'

class PromptView extends Component {
  render() {
    console.log(this.props.match.params)
    console.log(this.props.prompt.passages)
    return (
      <Fragment>
        <AppBar />
        <Prompt data={this.props.prompt} />
        <div className="passages--container">
          <div className="contents">
            <div className="spacer"><p></p></div>
            <div className="passages">
              { this.passages() }
            </div>
          </div>
        </div>

      </Fragment>
    )
  }
  passages() {
    return this.props.prompt.passages.map(passage => {
      return (
        <div className="passage">
          <a className="button">
            <span>{ passage.versions[0].body }</span>
          </a>
        </div>
      )
    })
  }
}

const mapStateToProps = (state, ownProps) => ({
  prompt: state.prompts.find(prompt => prompt.id == ownProps.match.params.id)
})

export default connect(mapStateToProps)(PromptView)
