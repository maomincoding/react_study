import {actionsTypes} from './index'
import {fromJS} from 'immutable'

let defaultState =fromJS({
  list:[]
}) 

export default (state=defaultState, action) => {
  switch (action.type) {
    case actionsTypes.LIST:
      return state.set('list',action.data)
    default:
      return state;
  }
}