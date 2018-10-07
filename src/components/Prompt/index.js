import ArrowDown from '@material-ui/icons/ArrowDownward'
import ArrowUp from '@material-ui/icons/ArrowUpward'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import Close from '@material-ui/icons/Close'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { Drawer } from '@material-ui/core'

class Prompt extends React.Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  };


  render() {
    return (

        <div className="prompt">
          <Drawer width="50%" className="drawer--prompt" anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
            <button
              className="button plain button--close"
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('right', false)}
              onKeyDown={this.toggleDrawer('right', false)}
            >
              <Close />
            </button>
            <div className="contents">
              <h2>Buy this shit!</h2>
            </div>
          </Drawer>
          <div className="contents">
            <div className="body">
              <p>{this.props.data.body}</p>
            </div>
            <div className="actions">
              <p className="market-cap">${this.props.data.marketCap}</p>
              <div className="buy-sell">
                <button className="button" onClick={this.toggleDrawer('right', true)}><ArrowUp /></button>
                <a className="button"><ArrowDown /></a>
              </div>
              <div className="read-more">
              <Link to={`/prompts/${this.props.data.id}`} className="button">Read More <MoreHoriz /></Link>
              </div>
            </div>


          </div>
        </div>
    )
  }
}

export default Prompt
