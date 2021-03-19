import { combineReducers, createStore } from 'redux'
import cartReducer from './Cart/reducer'

const rootReducers = combineReducers({ 
    cart   : cartReducer,
})

const store = createStore(rootReducers)

export default store