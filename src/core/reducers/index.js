import { combineReducers } from 'redux'
import uiReducer           from 'core/reducers/reducer-ui'
import promptsReducer      from 'core/reducers/reducer-prompts'

const rootReducer = combineReducers({
  ui: uiReducer,
  prompts: promptsReducer
})

export default rootReducer
