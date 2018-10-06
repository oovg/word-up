import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'

class PromptComposer extends Component {
    state = { value: '' }

    handleChange = (e) => {
      this.setState({ value: e.target.value })
    }

    render() {
      const { onSubmit, ...props } = this.props
      return (
        <div {...props}>
          <TextField value={this.state.value} onChange={this.handleChange} required />
          <Button variant="contained" color="primary" onClick={onSubmit}>Create</Button>
        </div>
      )
    }
}

export default PromptComposer
