import {combineReducers} from "redux"
import {globalReducers} from "./global.reducer";
import {userReducers} from "./user.reducer";

export default combineReducers({
    global: globalReducers,
    user: userReducers
})