import { MuiThemeProvider } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from 'configs/theme/config-theme'
import HomeView from 'containers/HomeView'
import PromptView from 'containers/PromptView'

import './styles.scss' // global styles

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
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

export default App