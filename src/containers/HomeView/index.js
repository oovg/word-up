import { connect } from 'react-redux';
import React, { Component } from 'react';
import Add from '@material-ui/icons/Add';
import constants from 'core/types';

import { getWeb3ServiceInstance } from '../../utils/Web3Service';

import PromptList from '../../components/PromptList';
import AppBar from '../../components/AppBar';
import { addPrompt } from '../../core/actions/actions-prompts';
import {
  openRightDrawer,
  updateDrawerContext,
} from '../../core/actions/actions-ui';
// import TcrFactory from '../../api/TcrFactory'

// import TcrFactoryService from '../../utils/TcrFactoryWeb3';

import './styles.scss';

class HomeView extends Component {
  state = {
    account: null,
  };

  componentDidMount = async () => {
    this.web3Service = getWeb3ServiceInstance();
    const account = await this.web3Service.getMainAccount();
    this.setState({ account });
  };

  openPromptComposer() {
    this.props.openRightDrawer();
    this.props.updateDrawerContext(constants.PROMPT_COMPOSER, {});
  }

  render() {
    const account = this.state.account;

    return (
      <div>
        <AppBar account={account} />
        <div className="toolbar">
          <div className="contents">
            <h2>Viewing Prompts</h2>
            <button
              className="button"
              onClick={this.openPromptComposer.bind(this)}
            >
              <Add /> Add A Prompt
            </button>
          </div>
        </div>
        <div className="prompts">
          <PromptList prompts={this.props.prompts} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ prompts: state.prompts });

export default connect(
  mapStateToProps,
  { addPrompt, openRightDrawer, updateDrawerContext },
)(HomeView);
