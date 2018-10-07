import constants from 'core/types'

export function addPrompt(body) {
  return {
    type: constants.ADD_PROMPT,
    body
  }
}


export function addPassage(body) {
  return {
    type: constants.ADD_PASSAGE,
    body
  }
}
