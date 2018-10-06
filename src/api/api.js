import Prompt from './prompt.js'
import mockPrompts from '../data/prompts.js'

class Api {
  constructor() {

  }

  balance() {
    return 100
  }

  prompts() {
    return mockPrompts
  }
}

export default Api
