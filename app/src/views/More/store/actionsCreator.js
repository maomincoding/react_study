import {actionsTypes} from './index';
import {moreData,loginIn} from '../../../request/api';
import { fromJS } from 'immutable';

const listData = (data) => {
  return {
    type: actionsTypes.LIST,
    data: fromJS(data)
  }
};

const loginStatus = (data) =>{
  return {
    type:actionsTypes.LOGIN,
    status:data
  }
};

export const getMoreList = () => {
  return (dispatch) => {
    moreData().then((res) => {
      const data = res.data;
      const action = listData(data);
      dispatch(action);
    }).catch((err) => {
      console.log(err);
    })
  }
};

export const login = (user,pass) =>{
  return (dispatch) =>{
    loginIn({'user':user,'pass':pass}).then((res)=>{
      dispatch(loginStatus(res.data))
    }).catch((err)=>{
      console.log(err);
    })
  }
};