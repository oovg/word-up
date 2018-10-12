import { combineReducers } from 'redux'
// import web3Reducer           from 'core/reducers/reducer-web3'
import uiReducer           from 'core/reducers/reducer-ui'
import promptsReducer      from 'core/reducers/reducer-prompts'

const rootReducer = combineReducers({
  ui: uiReducer,
  prompts: promptsReducer
})

export default rootReducer
