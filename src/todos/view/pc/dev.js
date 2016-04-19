/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore,compose,applyMiddleware} from "redux";
import { persistState } from 'redux-devtools';
import reducers from "../../model/reducers";
const loggerMiddleware = createLogger()
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
        <LogMonitor />
    </DockMonitor>
);
const createStoreWithMiddleware = compose(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
)(createStore);


module.exports = {
    createStore : createStoreWithMiddleware,
    Dev : DevTools
}
