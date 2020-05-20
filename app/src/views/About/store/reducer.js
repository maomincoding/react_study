import {actionsTypes} from './index'
import {fromJS} from 'immutable'

let defaultState = fromJS({
  title: 'About页',
  list: [],
  datalist: [],
  flag:false
})

export default (state = defaultState,action) =>{
  // switch (actions.type) {
  //   case actionsTypes.TITLE:
  //     return state.set()
  //     break;
  //   default:
  //     return state;
  // }
  return state;
} 
