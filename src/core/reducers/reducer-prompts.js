import constants from 'core/types'
import prompts from '../../data/prompts'

function promptsReducer(state = prompts, action) {
  switch (action.type) {
    case constants.ADD_PROMPT:
      const newPrompt = {
        id: state.prompts.length,
        body: action.body,
        marketCap: 666
      }

      const newPrompts = state.prompts.slice()
      newPrompts.push(newPrompt)

      return Object.assign({}, state, {
        prompts: newPrompts
      })
    default:
      return state
  }
}

export default promptsReducer
