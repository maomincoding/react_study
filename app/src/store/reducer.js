import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../views/Home/store/'
import { reducer as aboutReducer } from '../views/About/store/'
import { reducer as moreReducer } from '../views/More/store'
const reducer = combineReducers({
  home: homeReducer,
  about: aboutReducer,
  more: moreReducer
})

export default reducer