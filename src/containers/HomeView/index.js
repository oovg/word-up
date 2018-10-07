import { connect } from 'react-redux'
import React, { Component } from 'react'
import PromptList from '../../components/PromptList'
import Api from '../../api/api'
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

  render() {
    return (
      <div>
        <div>Viewing Prompts</div>
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
