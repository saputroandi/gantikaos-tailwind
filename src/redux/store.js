import { combineReducers, createStore } from 'redux'
import cartReducer from './Cart/reducer'
import tokenReducer from './Token/reducer'

const rootReducers = combineReducers({ 
    cart    : cartReducer,
    token   : tokenReducer,
})

const store = createStore(rootReducers)

export default store