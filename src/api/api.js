import Prompt from './prompt.js'
import mockPrompts from '../data/prompts.js'

class Api {
  constructor() {

  }

  // Public Functions
  balance() {
    return this.user.balance
  }

  addPrompt(body, spend) {
    this._prompts.push({
      id: this._prompts.length,
      body,
      marketCap: 1234
    })

    this.prompts = this._prompts
  }

  // Private Functions
}

export default Api
