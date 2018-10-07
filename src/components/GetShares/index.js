import { connect } from 'react-redux'
import { TextField } from '@material-ui/core'
import React, { Component } from 'react'
import './styles.scss'

class GetShares extends Component {
    state = {
      value: ''
    }

    onSubmit = () => {
      // this.props.addPrompt(this.state.value)

      this.setState({
        value: ''
      })
    }

    handleChange = (e) => {
      this.setState({ value: e.target.value })
    }

    render() {
      const { ...props } = this.props
      return (
        <div {...props} className="get-shares contents">
          <div className="form">
            <h3>Get Shares</h3>
            <TextField value={this.state.value} label="Enter Amount" onChange={this.handleChange} required />
            <button className="button" variant="contained" onClick={this.onSubmit}>Create</button>
          </div>
        </div>
      )
    }
}

export default connect(
  null,
  { }
)(GetShares)
