import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Prompt = ({ data, ...props }) => {
  return (
    <div>
      <div className="prompt" {...props}>
        <div className="contents">
          <div className="actions">
            <p className="market-cap">${data.marketCap}</p>
            <div className="buy-sell">
              <a className="button"><KeyboardArrowUp /></a>
              <a className="button"><KeyboardArrowDown /></a>
            </div>
          </div>
          <div className="body">
            <p>{data.body}</p>
            <Link to={`/prompts/${data.id}`} className="button">Read More <MoreHoriz /></Link>
          </div>
          <div className="passages">
            { data.passages[0].body }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prompt
