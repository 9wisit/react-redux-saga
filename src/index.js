import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import IndexPage from './containers/IndexPage';
import {Provider} from 'react-redux'
import store from "./utils/store";
import {userConstants} from "./constants";

store.dispatch({type: userConstants.GETALL_REQUEST})

const AppProvider = () => (
    <Provider store={store}>
        <IndexPage/>
    </Provider>
)

ReactDOM.render(<AppProvider/>, document.getElementById('root'));