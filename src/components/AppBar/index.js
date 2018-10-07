import React                   from 'react'
import PropTypes               from 'prop-types'
import { AppBar as MuiAppBar } from '@material-ui/core'
import { styles }              from './styles.scss'

const AppBar = (props) => {
  const { children } = props

  return (
    <div className={styles}>
      <div className="app-bar">
        <h1>wordUp</h1>
        <div className="nav">
          <a className="nav-item">Prompts</a>
          <a className="nav-item">Dashboard</a>
        </div>
      </div>
    </div>
  )
}

AppBar.propTypes = {
  children: PropTypes.node
}

AppBar.defaultProps = {
  children: null
}

export default AppBar
