import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import React from 'react'

import './styles.scss'

const Prompt = ({ data, ...props }) => (
  <div className="prompt" {...props}>
    <div className="contents">
      <div clasName="actions">
        <span>{data.marketCap}</span>
        <KeyboardArrowUp />
        <KeyboardArrowDown />
      </div>
      <div className="body">
        <p>{data.body}</p>
        <a className="button">Read more <MoreHoriz /></a>
      </div>

    </div>
  </div>
)

export default Prompt
