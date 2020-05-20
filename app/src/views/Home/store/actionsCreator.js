import {actionsTypes} from './index'
import {homeData} from '../../../request/api'
import {fromJS} from 'immutable'

export const click =()=>{
    return {
        type: actionsTypes.CLICK
    }
}

export const animat =()=>{
    return {
        type: actionsTypes.ANIMAT
    }
}

const dataList =(data) =>{
    return {
        type:actionsTypes.DATA_LIST,
        data:fromJS(data)
    }
}

export const getList = () =>{
    return (dispatch) =>{
        homeData().then((res)=>{
            const data = res.data;
            const action = dataList(data);
            dispatch(action);
        }).catch((err)=>{
            console.log(err);
        })
    }
} 