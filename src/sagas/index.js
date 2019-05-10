import {takeLatest} from 'redux-saga/effects'
import {userConstants} from "../constants";
import {getUsers} from "./user.saga";

export default function* rootSagas() {
    yield takeLatest(userConstants.GETALL_REQUEST, getUsers);
}