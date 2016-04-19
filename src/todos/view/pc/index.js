/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import React from "react";
import {createStore,Dev} from "./dev.js";
import { Provider } from 'react-redux';
import App from './containers/app.js';
import initState from "model/initstate.js";
import reducers from "model/reducers";


module.exports = React.createClass({
    render : function(){
        const store = createStore(reducers,initState);
        return (
            <Provider store={store} >
                <div>
                    <h3>Todo List PC版 带调试功能</h3>
                    <App />
                    <Dev />
                </div>
            </Provider>
        )
    }
});
