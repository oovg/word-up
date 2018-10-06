import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
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
      <p className="body">{data.body}</p>
      <div className="read-more"><a className="button"> Read more »</a></div>
    </div>
  </div>
)

export default Prompt
