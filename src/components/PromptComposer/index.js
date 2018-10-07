import { Button, TextField, Input } from '@material-ui/core'
import React, { Component } from 'react'
import './styles.scss'

class PromptComposer extends Component {
    state = {
      value: '',
      from: '',
      to: ''
  }

    handleChange = (e) => {
      this.setState({ value: e.target.value })
    }

    render() {
      const { onSubmit, ...props } = this.props
      return (
        <div {...props} className="prompt-composer">
          <div className="form">
            <h3>Add a Prompt</h3>
            <TextField value={this.state.value} label={'Type here'} onChange={this.handleChange} required />
            <div className="payment--processor">
              <div className="from">
                <Input value={this.state.from} label={'Pay with'} onChange={this.handleChange} required />
              </div>
              <div className="to">
                <Input value={this.state.to} label={'Receive'} onChange={this.handleChange} required />
              </div>
            </div>
            <button className="button" variant="contained" onClick={onSubmit}>Create</button>
          </div>
        </div>
      )
    }
}

export default PromptComposer
