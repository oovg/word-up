
import React, { Fragment } from 'react'
import Prompt from '../Prompt'

const PromptList = ({ prompts, ...props }) => (
  <Fragment>
    {prompts.map(prompt => (
      <Prompt data={prompt} key={prompt.id} />
        ))}
  </Fragment>
)

export default PromptList
