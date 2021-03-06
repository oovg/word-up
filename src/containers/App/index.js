import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Drawer } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import Add from '@material-ui/icons/Add';
import ArrowUp from '@material-ui/icons/ArrowUpward';
import ArrowDown from '@material-ui/icons/ArrowDownward';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from 'configs/theme/config-theme';
import HomeView from 'containers/HomeView';
import PromptView from 'containers/PromptView';
import AppBar from '../../components/AppBar';

import { getWeb3ServiceInstance } from '../../utils/Web3Service';

import constants from 'core/types';
import PromptComposer from '../../components/PromptComposer';
import PassageComposer from '../../components/PassageComposer';
import GetShares from '../../components/GetShares';
import SellShares from '../../components/SellShares';
import {
  closeRightDrawer,
  openRightDrawer,
  updateDrawerContext,
} from '../../core/actions/actions-ui';

import './styles.scss'; // global styles

class App extends Component {
  state = {
    account: null,
  };

  componentDidMount = async () => {
    this.web3Service = getWeb3ServiceInstance();
    const account = await this.web3Service.getMainAccount();
    this.setState({ account });
  };

  openGetShares() {
    this.props.openRightDrawer();
    this.props.updateDrawerContext(constants.GET_SHARES, {});
  }

  openSellShares() {
    this.props.openRightDrawer();
    this.props.updateDrawerContext(constants.SELL_SHARES, {});
  }

  versions(promptId, passageId) {
    const prompt = this.props.prompts.find((prompt) => {
      return prompt.id == promptId;
    });

    const passage = prompt.passages[passageId];
    if (passage) {
      return passage.versions.map((version) => {
        return (
          <div className="version">
            <p>{version.body}</p>
            <div className="actions">
              <p className="market-cap">${version.marketCap}</p>
              <div className="buy-sell">
                <button
                  className="button"
                  onClick={this.openGetShares.bind(this)}
                >
                  <ArrowUp />
                </button>
                <button
                  className="button"
                  onClick={this.openSellShares.bind(this)}
                >
                  <ArrowDown />
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
  }

  versionsDrawer(promptId, passageId) {
    return (
      <div className="contents version-list">
        <a className="">
          <Add /> Add a New Version
        </a>
        <h2>Stake a Version of the Passage.</h2>
        <div className="versions">{this.versions(promptId, passageId)}</div>
      </div>
    );
  }

  element() {
    const drawer = this.props.drawer;
    const account = this.state.account;

    if (drawer.context === constants.PROMPT_COMPOSER) {
      return <PromptComposer account={account} />;
    }

    if (drawer.context === constants.PASSAGE_COMPOSER) {
      return <PassageComposer />;
    }

    if (drawer.context === constants.GET_SHARES) {
      return <GetShares />;
    }

    if (drawer.context === constants.SELL_SHARES) {
      return <SellShares />;
    }

    if (drawer.context === constants.VERSIONS) {
      return this.versionsDrawer(drawer.data.promptId, drawer.data.passageId);
    }

    return null;
  }

  drawer() {
    return (
      <Drawer
        width="50%"
        className="drawer--prompt"
        anchor="right"
        open={this.props.drawer.open}
        onClose={this.props.closeRightDrawer}
      >
        <button
          className="button plain button--close"
          tabIndex={0}
          role="button"
          onClick={this.props.closeRightDrawer}
          onKeyDown={this.props.closeRightDrawer}
        >
          <Close />
        </button>

        {this.element()}
      </Drawer>
    );
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.drawer()}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/prompts/:id" component={PromptView} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    drawer: state.ui.drawer,
    prompts: state.prompts,
  };
};

export default connect(
  mapStateToProps,
  { closeRightDrawer, openRightDrawer, updateDrawerContext },
)(App);
