import {userConstants} from "../constants";

export const userActions = {
    success: (users) => {
        return {type: userConstants.GETALL_SUCCESS, users};
    },
    error: (message) => {
        return {type: userConstants.GETALL_FAILURE, message};
    }
}