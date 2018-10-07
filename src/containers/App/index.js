import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Drawer } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from 'configs/theme/config-theme'
import HomeView from 'containers/HomeView'
import PromptView from 'containers/PromptView'

import constants from 'core/types'
import PromptComposer from '../../components/PromptComposer'
import { closeRightDrawer } from '../../core/actions/actions-ui'

import './styles.scss' // global styles

class App extends Component {
  element() {
    if (this.props.drawerContext === constants.PROMPT_COMPOSER) {
      return (
        <PromptComposer />
      )
    }

    return null
  }

  drawer() {
    return (
      <Drawer width="50%" className="drawer--prompt" anchor="right" open={this.props.drawerOpen} onClose={this.props.closeRightDrawer}>
        <button
          className="button plain button--close"
          tabIndex={0}
          role="button"
          onClick={this.props.closeRightDrawer}
          onKeyDown={this.props.closeRightDrawer}
        >
          <Close />
        </button>

        { this.element() }
      </Drawer>
    )
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        { this.drawer() }
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/prompts/:id" component={PromptView} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.ui.rightDrawerIsOpen,
    drawerContext: state.ui.drawerContext
  }
}

export default connect(mapStateToProps, { closeRightDrawer })(App)
