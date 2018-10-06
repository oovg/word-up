import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import React from 'react'

const Prompt = ({ data, ...props }) => (
  <div {...props}>
    <div>
      <p>{data.prompt}</p>
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
