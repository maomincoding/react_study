import {actionsTypes} from './index'

let defaultState = {
    name: 'maomin',
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionsTypes.CLICK:
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.push(1);
            console.log(newState.list);
            return newState
        default:
            return state;
    }
}