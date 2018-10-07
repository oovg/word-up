import { connect } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from 'configs/theme/config-theme'
import HomeView from 'containers/HomeView'
import PromptView from 'containers/PromptView'


import { Drawer } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import PromptComposer from '../../components/PromptComposer'

import './styles.scss' // global styles

class App extends Component {
  drawer() {
    return (
      <Drawer width="50%" className="drawer--prompt" anchor="right" open={this.props.drawerOpen} onClose={this.toggleDrawer}>
        <button
          className="button plain button--close"
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer}
          onKeyDown={this.toggleDrawer}
        >
          <Close />
        </button>
        <PromptComposer />
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
    drawerOpen: state.ui.rightDrawerIsOpen
  }
}

export default connect(mapStateToProps, null)(App)
