import React, { Component } from 'react'
import PromptList from '../../components/PromptList'
import Api from '../../api/api'

class HomeView extends Component {
  render() {
    // TODO: Take this out of render into a constructor.
    const api = new Api()

    return (
      <div>
        <div>Viewing Prompts</div>
        <div className="prompts">
          <PromptList prompts={api.prompts()} />
        </div>
      </div>

    )
  }
}

export default HomeView
