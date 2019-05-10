import {call, put} from 'redux-saga/effects'
import {userServices} from '../services'
import {userActions} from "../actions";

export const getUsers = function* () {
    try {
        const users = yield call(userServices.getUsers);
        yield put(userActions.success(users));
    } catch (e) {
        yield put(userActions.error(e.message));
    }
};
