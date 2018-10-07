import React                   from 'react'
import PropTypes               from 'prop-types'
import { AppBar as MuiAppBar } from '@material-ui/core'
import { styles }              from './styles.scss'
import { Link } from 'react-router-dom'

const AppBar = (props) => {
  const { children } = props

  return (
    <div className={styles}>
      <div className="app-bar">
        <h1>wordUp</h1>
        <div className="nav">
          <Link to="/" className="nav-item">Prompts</Link>
          <Link to="/" className="nav-item">Dashboard</Link>
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
