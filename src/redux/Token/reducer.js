import { ADD_TOKEN } from './constants'

const initialState = []

const reducer = (state = initialState, action) => {

    switch(action.type) {
        
        case ADD_TOKEN:

            return [
                ...state,
                {...action.item}
            ]

        default:
            return state

    }

}

export default reducer