import { connect } from 'react-redux'
import { TextField } from '@material-ui/core'
import React, { Component } from 'react'
import { addPrompt } from '../../core/actions/actions-prompts'
import { closeRightDrawer } from '../../core/actions/actions-ui'
import './styles.scss'

class PromptComposer extends Component {
    state = {
      value: ''
    }

    onSubmit = () => {
      this.props.addPrompt(this.state.value)

      this.setState({
        value: ''
      })

      this.props.closeRightDrawer()
    }

    handleChange = (e) => {
      this.setState({ value: e.target.value })
    }

    render() {
      const { ...props } = this.props
      return (
        <div {...props} className="prompt-composer">
          <div className="form">
            <h3>Add a New Prompt</h3>
            <TextField value={this.state.value} label="Type here" onChange={this.handleChange} required />
            <button className="button" variant="contained" onClick={this.onSubmit}>Create</button>
          </div>
        </div>
      )
    }
}

export default connect(
  null,
  { addPrompt, closeRightDrawer }
)(PromptComposer)
