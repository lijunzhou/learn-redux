/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"
import React from "react";
import { Provider } from 'react-redux';
import App from './containers/app.js';
import createStore from "../../model/config_store.js";

const store = createStore();
module.exports = React.createClass({
    render : function(){
        return (
            <Provider store={store} >
                <div>
                    <h3>Todo List 移动版</h3>
                    <App />
                </div>
            </Provider>
        )
    }
});
