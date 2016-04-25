/**
 * Created by zhoulijun on 16/4/14.
 */
"use strict"

import React from "react";
import {render} from "react-dom";
import TodosPC from "./todos/view/pc/containers/app.js";
import {compose} from "redux";
import {createStore,Dev} from "./todos/view/pc/dev.js";
import {Provider} from "react-redux";
import {Route,browserHistory} from "react-router";
import {
    ReduxRouter,
    routerStateReducer,
    reduxReactRouter,
} from 'redux-router';
import { createHistory } from 'history';
import reducers from "model/reducers";

const store = compose(
    reduxReactRouter({createHistory})
)(createStore)(reducers);

render((
    <div>
        <Provider store={store}>
            <div>
                <ReduxRouter>
                    <Route path="/" component={TodosPC} >
                        <Route path="todos" component={TodosPC} />
                    </Route>
                </ReduxRouter>
            </div>
        </Provider>
        <Dev store={store} />
    </div>
),document.getElementById("content"));

