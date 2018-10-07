import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AppBar from '../../components/AppBar'
import Prompt from '../../components/Prompt'

import './styles.scss'

class PromptView extends Component {
  render() {
    console.log(this.props.match.params)
    return (
      <Fragment>
        <AppBar />
        <Prompt data={this.props.prompt} />
        <div className="passages">
          { this.passages() }
        </div>

      </Fragment>
    )
  }
  passages() {
    return this.props.prompt.passages.map(passage => {
      return (
        <div className="passage">
          <p>{ passage.body }</p>
        </div>
      )
    })
  }
}

const mapStateToProps = (state, ownProps) => ({
  prompt: state.prompts.find(prompt => prompt.id == ownProps.match.params.id)
})

export default connect(mapStateToProps)(PromptView)
