import { connect } from 'react-redux'
import { TextField } from '@material-ui/core'
import React, { Component } from 'react'
import { addPrompt } from '../../core/actions/actions-prompts'
import { closeRightDrawer } from '../../core/actions/actions-ui'
import './styles.scss'
import  '../../api/TcrFactory.js'
import TcrFactory from  '../../api/TcrFactory'
//import createTCR from  '../../api/TcrFactory'

class PromptComposer extends Component {
    state = {
      value: ''

    }
    onSubmit = () => {
      this.props.addPrompt(this.state.value)
      const account = '0xd66e018cc12b0e35dc1abf0991cef06a6bd295b9'
      const contractAddr = '0x73f24e09486db7e69705f465832be91b13e67917'
      const erc20Addr = '0x08cd0c6dc1ff4614053dca4a4a6aa39655d19b32'
      const factory = new TcrFactory(web3, contractAddr)
      factory.createTCR(this.state.value,500000,"0x336a213839f8b27518aaf40d9afe9788e2a8a44c",0)
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
