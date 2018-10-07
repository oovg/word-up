
import React, { Fragment } from 'react'
import Passage from '../Passage'

const PassageList = ({ Passages, ...props }) => (
  <Fragment>
    {Passages.map(Passage => (
      <Passage data={Passage} key={Passage.id} />
        ))}
  </Fragment>
)

export default PassageList
