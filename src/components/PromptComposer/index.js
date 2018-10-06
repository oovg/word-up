import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'
import './styles.scss'

class PromptComposer extends Component {
    state = { value: '' }

    handleChange = (e) => {
      this.setState({ value: e.target.value })
    }

    render() {
      const { onSubmit, ...props } = this.props
      return (
        <div {...props} className="prompt-composer">
          <TextField value={this.state.value} label={'Add a prompt'}onChange={this.handleChange} required />
          <button className="button" variant="contained" onClick={onSubmit}>Create</button>
        </div>
      )
    }
}

export default PromptComposer
