/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict"

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import {createStore,compose} from "redux";
import { persistState } from 'redux-devtools';
import reducers from "../../model/reducers";

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
        <LogMonitor />
    </DockMonitor>
);

const enhancer = compose(
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

module.exports = {
    createStore : function(initState){
        return createStore(reducers,initState,enhancer);
    },
    Dev : DevTools
}
