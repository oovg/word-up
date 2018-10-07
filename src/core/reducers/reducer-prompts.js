import constants from 'core/types'
import prompts from '../../data/prompts'

function promptsReducer(state = prompts, action) {
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

    case constants.ADD_PASSAGE:
      const prompt = state.prompt.find(
        prompt => {
          return prompt.id == action.promptId
        }
      )

     const newPassages = prompt.passages.slice()
     const newVersion = {
       body: action.body,
       marketCap: 678
     }

     newPassages.push({versions: [body: action.body]})
     return 


    default:
      return state
  }
}

export default promptsReducer
