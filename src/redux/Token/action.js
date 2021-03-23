import { ADD_TOKEN } from './constants'

export const setAddToken = (item) => {

    return {
        type: ADD_TOKEN,
        item
    }

}