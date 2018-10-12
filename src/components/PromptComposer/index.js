import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { addPrompt } from '../../core/actions/actions-prompts';
import { closeRightDrawer } from '../../core/actions/actions-ui';
import './styles.scss';
// import  '../../api/TcrFactory.js'
// import TcrFactory from  '../../api/TcrFactory'
//import createTCR from  '../../api/TcrFactory'

import TcrFactoryService from '../../utils/TcrFactoryWeb3';

class PromptComposer extends Component {
  state = {
    value: '',
    contract: null,
  };

  componentDidMount = async () => {
    this.factoryService = new TcrFactoryService();

    const contract = await this.factoryService.initContracts();
    console.log(contract);

    this.setState({ contract });
  };

  onSubmit = () => {
    //TODO: Wire up into redux
    this.props.addPrompt(this.state.value);

    //here's where we'll do it
    console.log(this.props.account);
    console.log(this.state.value);

    this.factoryService.createTCR(
      this.state.value,
      1,
      '0xf25186b5081ff5ce73482ad761db0eb0d25abfbf', // dai contract?
      0,
    );

    this.setState({
      value: '',
    });

    this.props.closeRightDrawer();
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { ...props } = this.props;
    return (
      <div {...props} className="prompt-composer">
        <div className="form">
          <h3>Add a New Prompt</h3>
          <TextField
            value={this.state.value}
            label="Type here"
            onChange={this.handleChange}
            required
          />
          <button
            className="button"
            variant="contained"
            onClick={this.onSubmit}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addPrompt, closeRightDrawer },
)(PromptComposer);
