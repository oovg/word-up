import constants from 'core/types'
// import prompts from '../../data/prompts'

function promptsReducer(state = [], action) {
  switch (action.type) {
    case constants.ADD_PROMPT:
      const newPrompt = {
        id: state.length,
        body: action.body,
        marketCap: 666
      }

      const newPrompts = state.slice()
      newPrompts.push(newPrompt)

      return newPrompts
    default:
      return state
  }
}

export default promptsReducer
