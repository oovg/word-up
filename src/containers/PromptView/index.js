import React, { Component } from 'react'
import Prompt from '../../components/Prompt'

import './styles.scss'

class PromptView extends Component {
    render() {
        console.log(this.props.match.params)
        return
        <div>
          <div className="prompt--container">
            <p>hi</p>
          </div>
          <div className="passages--container">
           <div className="passages">
             <div className="passage">
             </div>
           </div>
          </div>
        </div>
    }
}

export default PromptView
