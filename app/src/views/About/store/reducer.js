import {actionsTypes} from './index'
import {fromJS} from 'immutable'

let defaultState = fromJS({
  title: 'About页',
  list: [],
  datalist: [],
  flag:false,
  a1:'a1',
  a2:'a2'
})

export default (state = defaultState,action) =>{
  switch (action.type) {
    case actionsTypes.TXT:
      return state.set('title','我是改变的title')
    case actionsTypes.AVALUE:
      return state.merge({
        'a1':'我是改变后的a1',
        'a2':'我是改变后的a2'
      })
    default:
      return state;
  }
} 
