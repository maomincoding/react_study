import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../views/Home/store/'
import { reducer as aboutReducer } from '../views/About/store/'
const reducer = combineReducers({
  home: homeReducer,
  about: aboutReducer
})

export default reducer