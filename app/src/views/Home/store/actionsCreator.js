import {actionsTypes} from './index'
import axios from 'axios'
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
        axios.get('/api/home.json').then((res)=>{
            const data = res.data;
            const action = dataList(data.data);
            dispatch(action);
        }).catch((err)=>{
            console.log(err);
        })
    }
} 