import {actionsTypes} from './index'
import {fromJS} from 'immutable'

let defaultState = fromJS({
    name: 'maomin',
    list: [],
    datalist: [],
    flag:false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionsTypes.CLICK:
            return state.set('list',[1])
        case actionsTypes.DATA_LIST:
            return state.set('datalist',action.data)
        case actionsTypes.ANIMAT:
            return state.set('flag',true)
        default:
            return state;
    }
}