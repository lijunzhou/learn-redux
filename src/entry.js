/**
 * Created by zhoulijun on 16/4/14.
 */
"use strict"

import React from "react";
import {render} from "react-dom";
import TodosPC from "./todos/view/pc/containers/app.js";
import {compose} from "redux";
import {createStore,Dev} from "./todos/view/pc/dev.js";
import {Provider} from "react-redux"
import {
    ReduxRouter,
    routerStateReducer,
    reduxReactRouter,
} from 'redux-router';
import { createHistory } from 'history';
import reducers from "./todos/model/reducers";


const store = compose(
    routerStateReducer({createHistory})
)(createStore)(reducer);

render((
    <Provider store={store}>
        <div>
            <ReduxRouter>
                <Route path="/" component={TodosPC} />
            </ReduxRouter>
            <Dev store={store} />
        </div>
    </Provider>
),document.getElementById("content"));
