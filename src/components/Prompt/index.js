import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import React from 'react'

import './styles.scss'

const Prompt = ({ data, ...props }) => (
  <div className="prompt" {...props}>
    <div className="contents">
      <p className="body">{data.prompt.body}</p>
      <p>Read more »</p>
    </div>
    <div>
      <span>{data.marketCap}</span>
      <KeyboardArrowUp />
      <KeyboardArrowDown />
    </div>
  </div>
)

export default Prompt
