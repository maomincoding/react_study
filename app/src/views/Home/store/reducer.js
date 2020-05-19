import {actionsTypes} from './index'
import {fromJS} from 'immutable'

let defaultState = fromJS({
    name: 'maomin',
    list: [],
    datalist: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionsTypes.CLICK:
            return state.set('list',[1])
        case actionsTypes.DATA_LIST:
            return state.set('datalist',action.data)
        default:
            return state;
    }
}