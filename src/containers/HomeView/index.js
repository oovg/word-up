import { Drawer } from '@material-ui/core'
import React, { Component } from 'react'
import PromptComposer from '../../components/PromptComposer'
import PromptList from '../../components/PromptList'
import Api from '../../api/api'

class HomeView extends Component {
  render() {
    // TODO: Take this out of render into a constructor.
    const api = new Api()

    return (
      <div>
        <Drawer variant="persistent" anchor="right" open styles={{ width: 256 }}>
          <PromptComposer />
        </Drawer>
        <div>
          <p>Viewing Prompts</p>
          <div className="prompts" style={{ marginRight: 256 }}>
            <PromptList prompts={api.prompts()} />
          </div>
        </div>
      </div>

    )
  }
}

export default HomeView
