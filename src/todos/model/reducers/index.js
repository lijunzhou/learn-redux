/**
 * Created by zhoulijun on 16/4/18.
 */
"use strict";

import initState from "../initstate.js";
import todos from "./todos.js";
import loading from "./loading.js";
import errorMsg from "./error_msg.js";
import { combineReducers } from 'redux';
import {
    routerStateReducer
} from 'redux-router';

module.exports = function(state = initState,action = {}){
    return {
        todos : todos(state.todos,action),
        loading : loading(state.loading,action),
        errorMsg : errorMsg(state.errorMsg,action),
        router: routerStateReducer(state.router,action)
    }
}
//
//module.exports = combineReducers({
//    todos,
//    filterType
//})