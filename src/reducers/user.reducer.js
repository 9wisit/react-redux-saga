import {userConstants} from "../constants";

const initialState = {
    lists: [],
    message: ''
}

export const userReducers = (state = initialState, action) => {
    if (action.type === userConstants.GETALL_SUCCESS) {
        return {...state, lists: action.users}
    } else if (action.type === userConstants.GETALL_FAILURE) {
        return {...state, message: action.message}
    }
    return state
}