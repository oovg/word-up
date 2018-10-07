import constants from 'core/types'

// In your reducer:
function web3Reducer(state, action) {
  switch(action.type) {
    case 'web3/RECEIVE_ACCOUNT':
      return {
        ...state,
        ethAddress: action.address
      };

    case 'web3/CHANGE_ACCOUNT':
      return {
        ...state,
        ethAddress: action.address
      };

      default:
        return state
  }
}

export default web3Reducer
