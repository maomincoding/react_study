import {actionsTypes} from './index'
import {moreData} from '../../../request/api'
import { fromJS } from 'immutable'

const listData = (data) => {
  return {
    type: actionsTypes.LIST,
    data: fromJS(data)
  }
}

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
}