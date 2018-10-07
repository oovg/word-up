import constants from 'core/types'

const initialState = {
  prompts: [
    {
      id: 1,
      body: 'from redux',
      marketCap: 1666
    }
  ]
}

function promptsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_PROMPT:
      const newPrompts = state.prompts.slice()
      newPrompts.push(action.prompt)

      return Object.assign({}, state, {
        prompts: newPrompts
      })
    default:
      return state
  }
}

export default promptsReducer
