import { connect } from 'react-redux'
import constants from 'core/types'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowDown from '@material-ui/icons/ArrowDownward'
import ArrowUp from '@material-ui/icons/ArrowUpward'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import Close from '@material-ui/icons/Close'

import './styles.scss'
import { openRightDrawer, updateDrawerContext } from '../../core/actions/actions-ui'


class Prompt extends React.Component {

  openGetShares() {
    this.props.openRightDrawer()
    this.props.updateDrawerContext(constants.GET_SHARES, {})
  }

  openSellShares() {
    this.props.openRightDrawer()
    this.props.updateDrawerContext(constants.SELL_SHARES, {})
  }

  renderReadMore() {
    if (!this.props.hideReadMore) {
      return (
        <div className="read-more">
          <Link to={`/prompts/${this.props.data.id}`} className="button">Read More <MoreHoriz /></Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="prompt">
        <div className="contents">
          <div className="body">
            <p>{this.props.data.body}</p>
          </div>
          <div className="actions">
            <p className="market-cap">${this.props.data.marketCap}</p>
            <div className="buy-sell">
              <button className="button" onClick={this.openGetShares.bind(this)}><ArrowUp /></button>
              <button className="button" onClick={this.openSellShares.bind(this)}><ArrowDown /></button>
            </div>
            { this.renderReadMore() }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ })

export default connect(
  mapStateToProps,
  { openRightDrawer, updateDrawerContext }
)(Prompt)
