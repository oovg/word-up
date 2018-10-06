import React from 'react'
import Prompt from '../Prompt'

const PromptList = ({ prompts, ...props }) => (
  <div {...props}>
    {prompts.map(prompt => (
      <Prompt data={prompt} />
        ))}
  </div>
)

export default PromptList
