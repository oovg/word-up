import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

class Prompt extends React.Component {
  render() {
    return (
        <div className="prompt">
          <div className="contents">
            <div className="actions">
              <p className="market-cap">${this.props.data.marketCap}</p>
              <div className="buy-sell">
                <a className="button"><KeyboardArrowUp /></a>
                <a className="button"><KeyboardArrowDown /></a>
              </div>
            </div>
            <div className="body">
              <p>{this.props.data.body}</p>
              <Link to={`/prompts/${this.props.data.id}`} className="button">Read More <MoreHoriz /></Link>
            </div>
            <div className="passages">
              { this.passages() }
            </div>
          </div>
        </div>
    )
  }

  passages() {
    return this.props.data.passages.map(passage => {
      return (
        <div className="passage">
          { passage.body }
        </div>
      )
    })
  }
}

export default Prompt
