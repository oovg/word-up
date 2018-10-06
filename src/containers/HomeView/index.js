import React, { Component } from 'react'
import PromptList from '../../components/PromptList'
import prompts from '../../data/prompts.js'

class HomeView extends Component {
  render() {
    return (
      <div>
        <div>Viewing Prompts</div>
        <div className="prompts">
          <PromptList prompts={prompts} />
        </div>
      </div>

    )
  }
}

export default HomeView
