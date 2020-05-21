import {actionsTypes} from './index';
import {fromJS} from 'immutable';

let defaultState =fromJS({
  list:[],
  login:false
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case actionsTypes.LIST:
      return state.set('list',action.data);
    case actionsTypes.LOGIN:
      return state.set('login',action.status)
    default:
      return state;
  }
};