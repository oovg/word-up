import constants from 'core/types'

export function addPrompt(prompt) {
  console.log('constants.ADD_PROMPT: ', constants.ADD_PROMPT)
  return {
    type: constants.ADD_PROMPT,
    prompt
  }
}
