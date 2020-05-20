import {actionsTypes} from './index'
import {fromJS} from 'immutable'

let defaultState = fromJS({
  title: 'About页',
  list: [],
  datalist: [],
  flag:false
})

export default (state = defaultState,action) =>{
  switch (action.type) {
    case actionsTypes.TXT:
      return state.set('title','我是改变的title')
    default:
      return state;
  }
} 
