import { Drawer } from '@material-ui/core'
import React, { Component } from 'react'
import PromptComposer from '../../components/PromptComposer'
import PromptList from '../../components/PromptList'
import Api from '../../api/api'

class HomeView extends Component {
  constructor() {
    super()
    this.api = new Api()
  }

  render() {
    return (
      <div>
        <Drawer variant="persistent" anchor="left" open>
          <PromptComposer />
        </Drawer>
        <div>
          <p>Viewing Prompts</p>
          <div className="prompts" style={{ marginRight: 256 }}>
            <PromptList prompts={this.api.prompts()} />
          </div>
        </div>
      </div>

    )
  }
}

export default HomeView
