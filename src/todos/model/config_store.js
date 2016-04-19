/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from "./reducers";
const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

module.exports = ()=>createStoreWithMiddleware(reducers);
